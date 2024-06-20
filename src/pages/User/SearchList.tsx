import { useState, useEffect } from 'react'
import List from './List'
import { getMyTravelLinePage, TravelLineStatus } from '@/services/travel'
import { useToast } from '@/components/Toast/use-toast'
import type { TravelLineListItem } from '@/services/travel'
import { useTranslation } from 'react-i18next'

export default function SearchList() {
  const { t } = useTranslation()
  const [travelList, setTravelList] = useState<TravelLineListItem[]>([])
  const { toast, dismiss } = useToast()

  function getList() {
    const { id } = toast({
      title: t('loading'),
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
          title: e.message || t('loadingFail'),
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
    <List data={travelList} getData={getList} title={t('recentSearch')} />
  )
}