import { useState, useEffect, useCallback, useRef } from 'react'
import Result from './Result'
import { useSearchParams } from 'react-router-dom'
import type { GenerateTravelLineParams, TravelResult } from '@/services/travel'
import { generateTravelLine } from '@/services/travel'
import { useToast } from '@/components/Toast/use-toast'
import Loading from '@/components/Loading'

export default function GenerateResult() {
  const { toast } = useToast()
  const [urlParams] = useSearchParams()
  const isFetching = useRef(false)
  const params = {
    startTime: urlParams.get('startTime'),
    endTime: urlParams.get('endTime'),
    location: urlParams.get('location')
  }
  
  const [result, setResult] = useState<TravelResult>()
  const [loading, setLoading] = useState(true)
  const fetchResult = useCallback(async function () {
    if (isFetching.current) return
    if (!params.startTime || !params.endTime || !params.location) {
      toast({
        title: '参数不完整',
        icon: 'error'
      })
      return
    }
    isFetching.current = true
    setLoading(true)
    setResult(undefined)
    try {
      const result = await generateTravelLine(params as GenerateTravelLineParams)
      setResult(result)
      setLoading(false)
    } catch (e: any) {
      toast({
        title: e.message || '生成失败',
        icon: 'error'
      })
    } finally {
      isFetching.current = false
    }

  }, [params.startTime, params.endTime, params.location])

  function onRefresh() {
    return generateTravelLine(params as GenerateTravelLineParams)
  }

  useEffect(function () {
    setLoading(true)
    fetchResult()
  }, [fetchResult])

  return (
    loading || !result ? <Loading/> : <Result refresh={onRefresh} data={result} />
  )
}