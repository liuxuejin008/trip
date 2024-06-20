import { useState, useEffect, useCallback, useRef } from 'react'
import Result from './Result'
import { useParams } from 'react-router-dom'
import type { TravelResult } from '@/services/travel'
import { getTravelLineInfoById } from '@/services/travel'
import { useToast } from '@/components/Toast/use-toast'
import { useTranslation } from 'react-i18next'

export default function GenerateResult() {
  const { t } = useTranslation()
  const { toast, dismiss } = useToast()
  const params = useParams<{ id: string }>()
  const isFetching = useRef(false)
  const [result, setResult] = useState<TravelResult>()
  const [isLoading, setIsLoading] = useState(false)
  const timer = useRef<number | null>(null)

  function startLoop() {
    return new Promise(function (resolve, reject) {
      async function loop() {
        try {
          const result = await getTravelLineInfoById(params.id!)
          setResult(result)
          if (result.status === 3) {
            timer.current = setTimeout(loop, 1000)
          } else {
            timer.current && clearTimeout(timer.current)
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
      title: t('getingResult'),
      icon: 'loading'
    })
    setIsLoading(true)
    try {
      await startLoop()
    } catch (e: any) {
      toast({
        title: e.message || t('fetchFail'),
        icon: 'error'
      })
    } finally {
      console.log('finally')
      isFetching.current = false
      setIsLoading(false)
      dismiss(id)
    }
  }, [params.id])


  useEffect(function () {
    setTimeout(loopResult)
    return () => {
        timer.current && clearTimeout(timer.current)
        timer.current = null
        setIsLoading(false)
    }
  }, [params.id])


  return (
    <Result data={result} startLoop={startLoop} isLoading={isLoading} />
  )
}
