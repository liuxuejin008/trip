import { useState, useEffect, useCallback, useRef } from 'react'
import Result from './Result'
import { useParams } from 'react-router-dom'
import type { TravelResult } from '@/services/travel'
import { getTravelLineInfoById } from '@/services/travel'
import { useToast } from '@/components/Toast/use-toast'

export default function GenerateResult() {
  const { toast, dismiss } = useToast()
  const params = useParams<{ id: string }>()
  const isFetching = useRef(false)
  const [result, setResult] = useState<TravelResult>()
  const [isLoading, setIsLoading] = useState(false)
  const timer = useRef<number | null>(null)

  function startLoop() {
    return new Promise(async function (resolve, reject) {
      async function loop() {
        try {
          const result = await getTravelLineInfoById(params.id!)
          setResult(result)
          if (result.status === 3) {
            setTimeout(loop, 1000)
          } else if (timer.current) {
            clearTimeout(timer.current)
            timer.current = null
            resolve(result)
          }
        } catch (e: any) {
          reject(e)
        }
      }
      loop()
    })
  }

  const loopResult = useCallback(async function () {
    if (isFetching.current) return
    isFetching.current = true
    setResult(undefined)
    const { id } = toast({
      title: '正在获取生成结果...',
      icon: 'loading'
    })
    setIsLoading(true)
    try {
      await startLoop()
    } catch (e: any) {
      toast({
        title: e.message || '获取失败',
        icon: 'error'
      })
    } finally {
      isFetching.current = false
      setIsLoading(false)
      dismiss(id)
    }
  }, [params.id])


  useEffect(function () {
    loopResult()
    return () => {
      timer.current && clearTimeout(timer.current)
    }
  }, [params.id])

  if (!result) return null

  return (
    <Result data={result} startLoop={startLoop} isLoading={isLoading} />
  )
}
