import { useState, useEffect, useRef, useMemo } from 'react'
import useInterval from './useInterval'

interface ITime {
  /** 当前时间 */
  currentTime: number
  /** 结束时间 */
  endTime: number
}

interface ICbTime {
  h: number
  m: number
  s: number
}

/**
 * @param options 时间对象
 * @param callBack 倒计时完成时执行的回调函数
 */
function useCountDown(options: ITime, callBack?: () => void): ICbTime {
  const { currentTime = 0, endTime = 0 } = options
  const [diffTime, setDiffTime] = useState(0)
  /** 组件接收到参数时的时间 */
  const entryTime = useRef<number>(0)
  /** 当前倒计时要求的时间差 */
  const maxTime = useRef<number>(0)
  /** 是否可以执行回调 */
  const isImplementCb = useRef(false)

  useEffect(() => {
    if (!isImplementCb.current) {
      isImplementCb.current = true
    }
    if (currentTime > 0 && endTime > 0) {
      entryTime.current = new Date().getTime()
      maxTime.current = endTime - currentTime
      if (maxTime.current <= 0) {
        isImplementCb.current = false
      }
      setDiffTime(maxTime.current)
    }
  }, [currentTime, endTime])

  useInterval(
    () => {
      const curtTimes = new Date().getTime()
      const TimeDifference = curtTimes - entryTime.current
      setDiffTime(maxTime.current - TimeDifference)
    },
    diffTime <= 0 ? null : 1000
  )

  const timeObj = useMemo(() => {
    const time = diffTime > 0 ? diffTime / 1000 : 0
    const h = Math.floor(time / (60 * 60))
    const m = Math.floor((time / 60) % 60)
    const s = Math.ceil(time % 60)

    if (diffTime <= 0 && isImplementCb.current) {
      setTimeout(() => {
        callBack && callBack()
      }, 0)
    }
    return { h, m, s }
  }, [diffTime])

  return timeObj || ({} as ICbTime)
}

export default useCountDown
