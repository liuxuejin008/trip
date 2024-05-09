import { useState, useEffect } from 'react'
import List from './List'
import { getMyTravelLinePage, TravelLineStatus } from '@/services/travel'
import { useToast } from '@/components/Toast/use-toast'
import type { TravelLineListItem } from '@/services/travel'

export default function SearchList() {
  const [travelList, setTravelList] = useState<TravelLineListItem[]>([])
  const { toast, dismiss } = useToast()

  useEffect(function () {
    const { id } = toast({
      title: '正在加载...',
      icon: 'loading'
    })
    getMyTravelLinePage({
      status: TravelLineStatus.SEARCH,
      page: 1,
      pageSize: 10
    })
      .then(res => setTravelList(res.list))
      .catch(e => {
        toast({
          title: e.message || '加载失败',
          icon: 'error'
        })
      })
      .finally(function () {
        dismiss(id)
      })

    return () => {
      dismiss(id)
    }
  }, [])
  return (
    <List data={travelList} title='最近搜索' />
  )
}