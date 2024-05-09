import { useState, useEffect, useCallback, useRef } from 'react'
import Result from './Result'
import { useParams } from 'react-router-dom'
import type { TravelResult } from '@/services/travel'
import { getTravelLineInfoById, refreshTravelLine } from '@/services/travel'
import { useToast } from '@/components/Toast/use-toast'
import Loading from '@/components/Loading'

export default function GenerateResult() {
  const { toast } = useToast()
  const params = useParams<{id: string}>()
  const isFetching = useRef(false)
  const [result, setResult] = useState<TravelResult>()
  const [loading, setLoading] = useState(true)
  const fetchResult = useCallback(async function () {
    
    isFetching.current = true
    setLoading(true)
    setResult(undefined)
    try {
      const result = await getTravelLineInfoById(params.id!)
      setResult(result)
      setLoading(false)
    } catch (e: any) {
      toast({
        title: e.message || '获取失败',
        icon: 'error'
      })
    } finally {
      isFetching.current = false
    }

  }, [params.id])

  function onRefresh () {
    return refreshTravelLine(params.id!)
  }

  useEffect(function () {
    setLoading(true)
    fetchResult()
  }, [fetchResult])

  return (
    loading || !result ? <Loading/> : <Result refresh={onRefresh} data={result} />
  )
}
