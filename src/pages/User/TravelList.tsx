import { useState, useEffect } from 'react'
import List from './List'
import { getMyTravelLinePage } from '@/services/travel'
import { useToast } from '@/components/Toast/use-toast'
import type { TravelLineListItem } from '@/services/travel'

export default function TravelList() {
  const [travelList, setTravelList] = useState<TravelLineListItem[]>([])
  const { toast, dismiss } = useToast()

  useEffect(function () {
    const { id } = toast({
      title: '正在加载...',
      icon: 'loading'
    })
    getMyTravelLinePage()
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
    <List data={travelList} title='保存的行程' />
  )
}