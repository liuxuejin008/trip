import cs from 'classnames'
import { useState } from 'react'
import IconStar from '@/components/Icons/Star'
import { useTranslation } from 'react-i18next'

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
        const isActive = hoverIndex ? item <= hoverIndex : props.value && item <= props.value
        return (
          <IconStar onClick={() => props.onChange?.(item)} onMouseOver={() => setHoverIndex(item)} key={item} className={cs('w-[57px] h-[53px] cursor-pointer', {
            'text-warn-light': isActive,
            'text-dark-light': !isActive
          })} />
        )
      })}
    </div>
  )
}
export default function Rate() {
  const { t } = useTranslation()
  const [rate, setRate] = useState<number>(3)

  return (
    <div className="flex w-[1146px] h-[87px] bg-primary-light rounded-20 items-center justify-between mt-[84px]">
      <div className="text-36 text-white ml-[175px]">{t('rateTour')}</div>
      <BaseRate value={rate} onChange={setRate} className="mr-[134px]" />
    </div>
  )
}
