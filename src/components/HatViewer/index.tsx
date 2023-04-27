import { useLayoutEffect, useRef } from 'react'
import THREE, {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  AmbientLight,
  Mesh,
  Vector3
} from 'three'
import { OrbitControls } from '@/core'
import type { GLTFLoader } from '@/core'

let gLTFLoader: GLTFLoader | null = null
let loaderUsers = 0
async function getgLTFLoader() {
  if (!gLTFLoader) {
    const { GLTFLoader } = await import('@/core')
    gLTFLoader = new GLTFLoader()
  }
  loaderUsers++
  return gLTFLoader
}
async function disposeLoader() {
  loaderUsers = Math.max(0, loaderUsers - 1)
  if (loaderUsers == 0) {
    gLTFLoader = null
  }
}

interface Props {
  url: string
  onEnd?: () => void
  width?: string | number
  height?: string | number
}
export default function HatViewer({ url, onEnd, width, height }: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null)
  useLayoutEffect(() => {
    if (!ref.current) return
    let isWork = true
    const width = ref.current.parentElement?.offsetWidth ?? 400
    const height = ref.current.parentElement?.offsetHeight ?? 400

    const scene = new Scene()
    const camera = new PerspectiveCamera(75, width / height)
    const renderer = new WebGLRenderer({
      alpha: true,
      canvas: ref.current
    })

    const light = new AmbientLight('white', 1)
    scene.add(light)

    camera.position.x = -3

    renderer.setClearColor(0x000000, 0)

    ref.current.replaceWith(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)

    let hat: Mesh

    getgLTFLoader().then((gLTFLoader) => {
      if (!isWork) return
      loadGLTF(gLTFLoader, url)
        .then((gFTL) => {
          if (!isWork) return
          const root = gFTL.scene
          const { x, y, z } = root.position
          hat = root.children[0]
          controls.target.set(x, y, z)
          controls.update()
          //vert = new THREE.Box3().setFromObject(hat).getCenter(hat.position)
          //vert = new Vector3(3,0,0.8)
          //hat.position.set(vert.x, vert.y, vert.z)
          scene.add(hat)
          onEnd?.()
          renderer.setSize(width, height)
        })
        .catch((err) => {
          onEnd?.()
          console.error(err)
        })
    })

    let draw = () => {
      requestAnimationFrame(draw)
      if (hat) {
        // hat.rotation.x += 0.01
        hat.rotation.y += 0.02
        // hat.rotation.z += 0.01
      }
      renderer.render(scene, camera)
    }
    draw()

    return () => {
      isWork = false
      draw = () => {}
      disposeLoader()
      try {
        renderer.dispose()
      } catch (e) {
        console.error(e)
      }
    }
  }, [url])

  const style = { width: width ?? '100%', height: height ?? '100%' }
  return (
    <div style={style}>
      <canvas ref={ref} width={width ?? '100%'} height={height ?? '100%'} />
    </div>
  )
}

function loadGLTF(loader: GLTFLoader, url: string) {
  return new Promise<any>((res, rej) => {
    loader.load(url, res, () => {}, rej)
  })
}
