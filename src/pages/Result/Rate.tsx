import cs from 'classnames'
import { useState } from 'react'

type BaseRateProps = {
  className?: string
  value?: number
  onChange?: (value: number) => void
}
export function BaseRate(props: BaseRateProps) {
  const list = Array.from({ length: 5 }, (_, i) => i + 1)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  return (
    <div onMouseLeave={() => setHoverIndex(null)} className={cs('flex gap-[26px]', props.className)}>
      {list.map(item => {
        const isActive = hoverIndex && item <= hoverIndex || props.value && item <= props.value
        return (
          <div onClick={() => props.onChange?.(item)} onMouseOver={() => setHoverIndex(item)} onMouseLeave={() => setHoverIndex(null)} key={item} className={cs('w-[57px] h-[53px] rounded-full cursor-pointer', {
            'bg-warn-light': isActive,
            'bg-gray-200': !isActive,
          })}></div>
        )
      })}
    </div>
  )
}
export default function Rate() {
  const [rate, setRate] = useState<number>(3)

  return (
    <div className="flex w-[1146px] h-[87px] bg-primary-light rounded-20 items-center justify-between mt-[84px]">
      <div className="text-36 text-white ml-[175px]">评价此次行程</div>
      <BaseRate value={rate} onChange={setRate} className="mr-[134px]" />
    </div>
  )
}
