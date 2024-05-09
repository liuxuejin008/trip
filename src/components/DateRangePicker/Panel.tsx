import { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import type { DateRange } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import './index.scss'
import { zhCN } from 'date-fns/locale'
import { getMonthDate, getWeekDay } from '@/utils/date'

export type PanelProps = {
  range?: DateRange
  onSelect?: (range?: DateRange) => void
  open: boolean
  setOpen: (open: boolean) => void
  disabled?: boolean
}
export default function Panel(props: PanelProps) {
  const [_range, _onSelect] = useState(props.range)
  const from = _range?.from
  const to = _range?.to

  useEffect(function () {
    _onSelect(props.range)
  }, [props.range, props.open])

  function onSave () {
    if (_range && _range.from && _range.to) {
      props.onSelect?.(_range)
    }
    props.setOpen(false)
  }

  return (
    <div className="w-screen flex flex-col text-white">
      <div className="flex flex-col items-center justify-center h-[470px] bg-date rounded-t-36">
        <div className="text-48 font-medium">你的旅程时间安排是？</div>
        <div className="h-[332px]">
          <DayPicker
            disabled={{ before: new Date() }}
            locale={zhCN}
            mode="range"
            selected={_range}
            onSelect={_onSelect}
          />
        </div>
      </div>
      <div className="h-[177px] bg-dark flex flex-col items-center justify-center text-white text-14">
        <div className="flex items-center text-24">
          <div>
            <div>抵达</div>
            <div className="mt-2.5">{getMonthDate(from)} {getWeekDay(from)}</div>
          </div>
          <div className="h-11 w-0.5 bg-white mx-11"></div>
          <div>
            <div>离开</div>
            <div className="mt-2.5">{getMonthDate(to)} {getWeekDay(to)}</div>
          </div>
        </div>
        <button onClick={onSave} className="w-[288px] h-[53px] rounded-18 bg-primary-light text-white flex items-center justify-center text-18 hover:bg-primary transition-bg outline-none mt-3.5">保存日期</button>
      </div>
    </div>
  )
}