import { useState } from 'react'
import DateRangePicker from '@/components/DateRangePicker'
import IconDownload from '@/components/Icons/Download'
import IconMap from '@/components/Icons/Map'
import IconRefresh from '@/components/Icons/Refresh'
import IconSave from '@/components/Icons/Save'
import type { TravelResult } from '@/services/travel'
import { useToast } from '@/components/Toast/use-toast'
import type { DateRange } from 'react-day-picker'
import { saveTravelLine } from '@/services/travel'
import {useNavigate} from 'react-router-dom'

type ActionButtonProps = {
  icon: React.ReactNode
  children: React.ReactNode
  onClick: () => void
  loading?: boolean
}
function ActionButton(props: ActionButtonProps) {
  return (
    <button disabled={props.loading} onClick={props.onClick} className="mt-14 w-[232px] h-[71px] bg-dark-light rounded-36 flex items-center justify-center shadow-date border border-dark-light-5 text-white text-18 cursor-pointer">
      {props.icon}
      <span className="ml-7">{props.children}</span>
    </button>
  )
}

type ActionsProps = {
  data: TravelResult
  setData: (data: TravelResult) => void
  refresh: () => Promise<TravelResult>
}
export default function Actions(props: ActionsProps) {
  const navigate = useNavigate()
  const [isSaving, setIsSaving] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(props.data.startTime),
    to: new Date(props.data.endTime)
  })

  const { toast, dismiss } = useToast()
  function noop () {
    toast({
      title: '功能暂未开放，敬请期待',
      icon: 'error'
    })
  }

  async function onSave () {
    setIsSaving(true)
    const { id } = toast({
      title: '正在保存...',
      icon: 'loading'
    })
    try {
      const result = await saveTravelLine(props.data)
      toast({
        title: '保存成功',
        icon: 'success'
      })

      if (!props.data.tralineId) {
        navigate(`/result/${result.tralineId}`)
      }
    } catch (error) {
      toast({
        title: '保存失败',
        icon: 'error'
      })
    } finally {
      setIsSaving(false)
      dismiss(id)
    }
  }

  async function onRefresh () {
    setIsRefreshing(true)
    const { id } = toast({
      title: '正在重新生成...',
      icon: 'loading'
    })
    try {
      const result = await props.refresh()
      props.setData(result)
      toast({
        title: '重新生成成功',
        icon: 'success'
      })
    } catch (error) {
      toast({
        title: '重新生成失败',
        icon: 'error'
      })
    } finally {
      setIsRefreshing(false)
      dismiss(id)
    }
  }

  return (
    <>
      <div className="mt-[74px] text-dark text-36 font-medium">旅程日期</div>
      <DateRangePicker disabled value={range} onChange={setRange} className="mt-14" />
      <div className="flex justify-center gap-8">
        <ActionButton icon={<IconDownload className="w-[46px] h-[38px]" />} onClick={noop}>
          下载行程
        </ActionButton>
        <ActionButton icon={<IconMap className="w-10 h-[42px]" />} onClick={noop}>
          查看地图
        </ActionButton>
        <ActionButton loading={isSaving} icon={<IconSave className="w-11 h-11" />} onClick={onSave}>
          保存行程
        </ActionButton>
        <ActionButton loading={isRefreshing} icon={<IconRefresh className="w-[34px] h-[34px]"/>} onClick={onRefresh}>
          重新生成
        </ActionButton>
      </div>
    </>
  )
}