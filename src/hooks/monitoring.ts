import { getHardcorePlayersOnServer } from "@/api";
import { useEffect, useState } from "react";

export function useHardcoreMonitor(delay: number): { max: number, current: number } {
  const [state, setState] = useState({ max: 2, current: 1 })

  useEffect(() => {
    const interval = setInterval(() => {
      getHardcorePlayersOnServer().then(stat => {
        setState(stat)
      })
    }, delay)
    return () => clearInterval(interval)
  }, [delay])

  return state
}