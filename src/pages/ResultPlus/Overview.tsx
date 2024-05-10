import { useState } from 'react'
import cs from 'classnames'
import IMAGE_BG from '@/assets/images/result_bg.png'

import IconLocation from '@/components/Icons/Location'
import IconMoney from '@/components/Icons/Money'
import IconPiece from '@/components/Icons/Piece'
import IconWeather from '@/components/Icons/Weather'

const icons = [
  {
    Icon: IconLocation,
    name: 'location',
    classNames: 'w-[19px] h-[22px]',
  },
  {
    Icon: IconMoney,
    name: 'money',
    classNames: 'w-[22px] h-[29px]',
  },
  {
    Icon: IconPiece,
    name: 'piece',
    classNames: 'w-[26px] h-[26px]',
  },
  {
    Icon: IconWeather,
    name: 'weather',
    classNames: 'w-[30px] h-[26px]',
  }
]


function Card() {
  const [current, setCurrent] = useState(icons[0].name)
  return (
    <div style={{borderImage: 'linear-gradient(148deg, rgba(98, 74, 255, 1), rgba(151, 151, 151, 0)) 1 1'}} className="w-[1146px] box-border h-[470px] bg-white/5 rounded-[43px] backdrop-blur-[15px] pt-20 px-[210px] mt-24">
      <div className="flex items-center justify-center flex-col">
        <div className="text-36 text-white truncate">简介标题</div>
        <div className="w-full text-left mt-[62px] h-36 overflow-hidden line-clamp-5 leading-7 text-20 text-white">简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息简介信息</div>
      </div>
      <div className="flex items-end justify-center gap-[28px] mt-12">
        {icons.map(item => <div onClick={() => setCurrent(item.name)} className={cs('w-[50px] h-[50px] items-center justify-center flex rounded-full overflow-hidden cursor-pointer', 
          item.name === current ? 'bg-white' : 'bg-dark',
          item.name === current ? 'text-dark' : 'text-white'
        )} key={item.name}><item.Icon className={item.classNames} /></div>)}
      </div>
    </div>
  )
}

export default function Overview() {
  return (
    <div style={{ backgroundImage: `url(${IMAGE_BG})` }} className="relative bg-cover h-[1080px] before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-dark-77">
      <div className="relative flex flex-col items-center pt-[94px] z-10">
        <div className="text-primary-light-2 text-32 font-medium">游攻略</div>
        <div className="text-primary-dark text-28">AI 旅游攻略</div>

        <div className="mt-[77px] text-white text-48 text-shadow-dark text-center">
          <div>用户昵称</div>
          <div>涠洲岛 3天 行程</div>
        </div>

        <Card />
      </div>
    </div>
  )
}
