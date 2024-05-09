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
  const fetchResult = useCallback(async function () {
    if (isFetching.current) return
    isFetching.current = true
    setResult(undefined)
    const { id } = toast({
      title: '正在获取...',
      icon: 'loading'
    })
    try {
      const result = await getTravelLineInfoById(params.id!)
      setResult(result)
    } catch (e: any) {
      toast({
        title: e.message || '获取失败',
        icon: 'error'
      })
    } finally {
      isFetching.current = false
      dismiss(id)
    }

  }, [params.id])


  useEffect(function () {
    fetchResult()
  }, [fetchResult])

  if (!result) return null

  return (
    <Result data={result} />
  )
}
