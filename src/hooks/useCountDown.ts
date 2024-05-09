import { useState, useRef } from 'react'

export default function useCountDown(duration: number) {
  const [count, setCount] = useState(0)
  const timer = useRef<number | null>(null)

  function countDown() {
    setCount(count => {
      if (count === 0) {
        stop()
        return 0
      }
      return count - 1
    })
    timer.current = setTimeout(countDown, 1000)
  }

  function start() {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    setCount(duration)
    countDown()
  }

  function stop() {
    if (timer.current) {
      clearTimeout(timer.current)
    }
  }

  return {
    count,
    start,
    stop
  }
}