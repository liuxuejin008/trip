import { useState, useEffect } from 'react'
import List from './List'
import { getMyTravelLinePage, TravelLineStatus } from '@/services/travel'
import { useToast } from '@/components/Toast/use-toast'
import type { TravelLineListItem } from '@/services/travel'

export default function TravelList() {
  const [travelList, setTravelList] = useState<TravelLineListItem[]>([])
  const { toast, dismiss } = useToast()

  function getList() {
    const { id } = toast({
      title: '正在加载...',
      icon: 'loading'
    })
    getMyTravelLinePage({
      status: TravelLineStatus.SAVED,
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
  }

  useEffect(function () {
    getList()
  }, [])

  return (
    <List data={travelList} getData={getList} title='保存的行程' />
  )
}