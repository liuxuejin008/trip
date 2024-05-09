import { useState, useEffect } from 'react'
import DateRangePicker from '@/components/DateRangePicker'
import IconDownload from '@/components/Icons/Download'
import IconMap from '@/components/Icons/Map'
import IconRefresh from '@/components/Icons/Refresh'
import IconSave from '@/components/Icons/Save'
import type { TravelResult } from '@/services/travel'
import { useToast } from '@/components/Toast/use-toast'
import type { DateRange } from 'react-day-picker'
import { saveTravelLine, refreshTravelLine, downloadTravelLine } from '@/services/travel'

type ActionButtonProps = {
  icon: React.ReactNode
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
}
function ActionButton(props: ActionButtonProps) {
  return (
    <button disabled={props.disabled} onClick={props.onClick} className="mt-14 w-[232px] h-[71px] bg-dark-light rounded-36 flex items-center justify-center shadow-date border border-dark-light-5 text-white text-18 cursor-pointer">
      {props.icon}
      <span className="ml-7">{props.children}</span>
    </button>
  )
}

type ActionsProps = {
  data?: TravelResult
  setData: (data: TravelResult) => void
  disabled: boolean
  setDisabled: (disabled: boolean) => void
  startLoop: () => void
}
export default function Actions(props: ActionsProps) {
  const { disabled, setDisabled } = props
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(props.data?.startTime || new Date()),
    to: new Date(props.data?.endTime || new Date())
  })


  useEffect(function () {
    if (!props.data) return
    setRange({
      from: new Date(props.data.startTime),
      to: new Date(props.data.endTime)
    })
  }, [props.data?.startTime, props.data?.endTime])

  const { toast, dismiss } = useToast()
  function noop () {
    toast({
      title: '功能暂未开放，敬请期待',
      icon: 'error'
    })
  }

  async function onSave () {
    setDisabled(true)
    const { id } = toast({
      title: '正在保存...',
      icon: 'loading'
    })
    try {
      await saveTravelLine(props.data!)
      toast({
        title: '保存成功',
        icon: 'success'
      })
    } catch (error) {
      toast({
        title: '保存失败',
        icon: 'error'
      })
    } finally {
      setDisabled(false)
      dismiss(id)
    }
  }

  async function onRefresh () {
    setDisabled(true)
    const { id } = toast({
      title: '正在重新生成...',
      icon: 'loading'
    })
    try {
      await refreshTravelLine(props.data!.tralineId)
      await props.startLoop()
      toast({
        title: '重新生成成功',
        icon: 'success'
      })
    } catch (error: any) {
      toast({
        title: error.message || '重新生成失败',
        icon: 'error'
      })
    } finally {
      setDisabled(false)
      dismiss(id)
    }
  }

  async function onDownload () {
    const { id } = toast({
      title: '正在下载...',
      icon: 'loading'
    })
    try {
      await downloadTravelLine(props.data!.tralineId, `${props.data!.location} ${props.data!.dayNumber} 天行程.pdf`)
    } catch (e: any) {
      toast({
        title: e.message || '下载失败',
        icon: 'error'
      })
    } finally {
      dismiss(id)
    }
  }

  return (
    <>
      <div className="mt-[74px] text-dark text-36 font-medium">旅程日期</div>
      <DateRangePicker disabled value={range} onChange={setRange} className="mt-14" />
      <div className="flex justify-center gap-8">
        <ActionButton disabled={disabled} icon={<IconDownload className="w-[46px] h-[38px]" />} onClick={onDownload}>
          下载行程
        </ActionButton>
        <ActionButton disabled={disabled} icon={<IconMap className="w-10 h-[42px]" />} onClick={noop}>
          查看地图
        </ActionButton>
        <ActionButton disabled={disabled} icon={<IconSave className="w-11 h-11" />} onClick={onSave}>
          保存行程
        </ActionButton>
        <ActionButton disabled={disabled} icon={<IconRefresh className="w-[34px] h-[34px]"/>} onClick={onRefresh}>
          重新生成
        </ActionButton>
      </div>
    </>
  )
}