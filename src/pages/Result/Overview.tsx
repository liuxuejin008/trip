// import { useState } from 'react'
// import cs from 'classnames'
import IMAGE_BG from '@/assets/images/result_bg.png'

// import IconLocation from '@/components/Icons/Location'
// import IconMoney from '@/components/Icons/Money'
// import IconPiece from '@/components/Icons/Piece'
// import IconWeather from '@/components/Icons/Weather'
import type { TravelResult } from '@/services/travel'
import { useTranslation } from 'react-i18next'

// const icons = [
//   {
//     Icon: IconLocation,
//     name: 'location',
//     classNames: 'w-[19px] h-[22px]',
//   },
//   {
//     Icon: IconMoney,
//     name: 'money',
//     classNames: 'w-[22px] h-[29px]',
//   },
//   {
//     Icon: IconPiece,
//     name: 'piece',
//     classNames: 'w-[26px] h-[26px]',
//   },
//   {
//     Icon: IconWeather,
//     name: 'weather',
//     classNames: 'w-[30px] h-[26px]',
//   }
// ]

type CardProps = {
  data?: TravelResult
}
function Card(props: CardProps) {
  // const [current, setCurrent] = useState(icons[0].name)
  const { data } = props
  return (
    <div className="w-[1146px] box-border h-[470px] bg-dark-light-78 rounded-[43px] pt-16 px-16 mt-40">
      <div className="flex items-center justify-center flex-col">
        <div className="text-36 h-28 text-white line-clamp-2 max-w-full" title={data?.title}>{data?.title}</div>
        <div className="w-full text-left mt-8 overflow-hidden line-clamp-[7] leading-7 text-20 text-white" title={data?.describe}>{data?.describe}</div>
      </div>
      {/* <div className="flex items-end justify-center gap-[28px] mt-12">
        {icons.map(item => <div onClick={() => setCurrent(item.name)} className={cs('w-[50px] h-[50px] items-center justify-center flex rounded-full overflow-hidden cursor-pointer', 
          item.name === current ? 'bg-dark' : 'bg-white',
          item.name === current ? 'text-white' : 'text-dark'
        )} key={item.name}><item.Icon className={item.classNames} /></div>)}
      </div> */}
    </div>
  )
}

type OverViewProps = {
  data?: TravelResult
}
export default function Overview(props: OverViewProps) {
  const { data } = props
  const { t } = useTranslation()
  return (
    <div style={{ backgroundImage: `url(${IMAGE_BG})` }} className="relative bg-cover min-w-[max(100vw,1200px)] h-[1108px] before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-dark-77">
      <div className="relative flex flex-col items-center pt-[34px] z-10">
        <div className="text-primary-light text-32 font-medium">{t('title')}</div>
        <div className="text-primary-dark text-28">{t('description')}</div>

        <div className="mt-[77px] text-white text-48 text-shadow-dark text-center">
          <div>{data?.author_name}</div>
          <div>{t('tourTitle', {location: data?.location, dayNumber: data?.dayNumber})}</div>
        </div>

        <Card data={data} />
      </div>
    </div>
  )
}
