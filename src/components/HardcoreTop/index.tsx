import { CSSProperties } from 'react'
import styles from './styles.module.css'
import { useHardcoreTop } from '@/hooks'
import { Spin, Typography } from 'antd'
import { useUserTheme } from '@/store/theme'

interface Props {
  className?: string
  style?: CSSProperties
}

export default function HardcoreTop({ className, style }: Props) {
  const top = useHardcoreTop()
  const locale = useUserTheme((s) => s.locale)

  if (top === 'loading')
    return (
      <div className={styles['block'] + ' ' + (className ?? '')} style={style}>
        <Typography.Title>{locale.words.top}</Typography.Title>
        <Spin />
      </div>
    )

  if (top === null)
    return (
      <div className={styles['block'] + ' ' + (className ?? '')} style={style}>
        <Typography.Title type="danger">
          {locale.hardcoreTop.cantLoad}
        </Typography.Title>
      </div>
    )

  return (
    <div className={styles['block'] + ' ' + (className ?? '')} style={style}>
      <Typography.Title>{locale.words.top}</Typography.Title>
      <table className={styles['table']}>
        <tbody>
          {top.map((stats) => (
            <tr key={stats.username}>
              <th>
                <img
                  width="32"
                  height="32"
                  src="/images/hcheart.png"
                  style={{ imageRendering: 'pixelated' }}
                />
              </th>
              <th>
                {stats.username} <br />
                <Typography.Text type="secondary">
                  {formatLastTimeOnServer(stats.lastTimeOnServer)}
                </Typography.Text>
              </th>
              <th className={styles[stats.status ?? 'none']}>
                <div />
              </th>
              <th>{dateFormat(stats.timeOnServer ?? 0)}</th>
              <th>{stats.deaths}</th>
              <th>{formatLastDeathTime(stats.lastDeathTime)}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function dateFormat(time: number) {
  let delta = Math.abs(time) / 1000

  const days = Math.floor(delta / 86400)
  delta -= days * 86400

  const hours = Math.floor(delta / 3600) % 24
  delta -= hours * 3600

  const minutes = Math.floor(delta / 60) % 60
  delta -= minutes * 60

  const seconds = Math.floor(delta % 60)

  const result = []
  if (days) result.push(days < 10 ? `0${days}` : days)
  if (hours) result.push(hours < 10 ? `0${hours}` : hours)
  if (minutes) result.push(minutes < 10 ? `0${minutes}` : minutes)
  if (seconds) result.push(seconds < 10 ? `0${seconds}` : seconds)

  return result.join(':')
}

function formatLastTimeOnServer(
  time: number | null | undefined
): string | null {
  if (!time) return null

  const formatter = Intl.DateTimeFormat('ru', {
    hour: '2-digit',
    minute: '2-digit'
  })
  const date = new Date(time)
  return formatter.format(date)
}

function formatLastDeathTime(time: number | null | undefined): string | null {
  if (!time) return null

  const formatter = Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
  const date = new Date(time)
  return formatter.format(date)
}