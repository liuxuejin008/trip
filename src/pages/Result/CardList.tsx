import { useState } from 'react'
import IconMinus from '@/components/Icons/Minus'
import { PopoverContent, Popover, PopoverTrigger } from '@/components/Popover'

function Recommend() {
  const list = [
    'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng23c6a51ed1e51317604113258093c8755e514ca5797c027c447d976fcb56db12',
    'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc463e051506f395efbf286b850c0a077329cd2be12796fd157dbf4f308fc4c88',
    'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd50dc330f29f253ab05f6b0d23796143dfec7b5591df0a8c40eb800551f22aaa'
  ]
  return (
    <div className="flex overflow-x-auto gap-10 mt-10">
      {list.map(src => (
        <div className="relative w-[196px] h-[246px] shadow-pic rounded-lg" key={src}>
          <img className="w-full h-full object-cover" src={src} />
          <a className="no-underline absolute w-[118px] h-11 bg-primary-light text-white flex items-center justify-center rounded-36 bottom-[22px] left-1/2 -translate-x-1/2 text-16" href="#">立即跳转</a>
        </div>
      ))}
    </div>
  )
}

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}
function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className="w-[178px] h-[54px] outline-none shadow-button bg-dark-light rounded-36 flex items-center justify-center text-18 font-light text-white">
      {props.children}
    </button>
  )
}

function EditButton() {
  const [open, setOpen] = useState(false)
  return (
    <Popover open={open}  onOpenChange={setOpen}>
      <PopoverTrigger>
        <Button>修改</Button>
      </PopoverTrigger>
      <PopoverContent sideOffset={20} className="w-[706px] border-none h-72 bg-dark !rounded-30 p-8 box-border flex flex-col justify-between">
        <h2 className="text-white text-36 font-semibold">跟AI对话进行修改</h2>
        <input className="w-full h-[60px] outline-none bg-white box-border rounded-18 px-5 text-20 font-semibold text-dark-light placeholder:text-dark-light" placeholder="那天你想做什么？" type="text" />
        <button onClick={() => setOpen(false)} className="outline-none w-48 h-[50px] bg-primary-light rounded-lg text-white text-20 flex items-center justify-center self-end font-semibold">生成</button>
      </PopoverContent>
    </Popover>
  )
}

function CardItem() {
  return (
    <div className="relative w-[1146px] box-border flex flex-col px-16 py-11 rounded-20 bg-primary-light">
      <div className="mt-20 flex items-center justify-between">
        <div className="text-48 text-white font-medium ml-6">第一天</div>
        <div className="ml-20 text-white">
          <div className="font-medium text-24">行程卡标题</div>
          <div className="text-18 font-light">副标题/景点名字/08-12</div>
        </div>
        <div className="flex items-end gap-5">
          <EditButton />
          <Button onClick={() => {}}>重新生成</Button>
        </div>
      </div>
      <div className="h-[398px] mt-12 overflow-y-auto box-border p-11 rounded-lg text-18 text-dark bg-white">
        早上，吃哪里早饭 <a href="#" className="text-primary">地点用这个颜色并且超链接到地图OR大众点评</a><br/>
        到达哪里哪里，进行旅游 <a className="text-warn" href="#">地点用这个颜色，并且百度地图指引</a><br/>
        午餐，在哪里午饭<br/>
        到达哪里游玩<br/>
        晚餐，在哪里晚餐<br/>
        到达哪里游玩<br/>
        就寝，在哪里睡觉 <a className="text-primary" href="#">睡觉地点也是用超链接美团OR大众点评</a>
      </div>
      <Recommend />
      <button className="absolute bottom-0 right-0 translate-x-full -mr-8 w-[232px] h-[71px] bg-warn-light rounded-36 flex items-center justify-center shadow-date text-18 text-dark font-light">添加日期</button>
      <IconMinus className="absolute top-6 right-6 w-[37px] h-[37px] bg-error-close text-white rounded-full cursor-pointer" />
    </div>
  )
}
export default function CardList() {
  const list = Array.from({ length: 5 }, (_, i) => i)
  return (
    <div className="flex flex-col mt-20 gap-20">
      {list.map(i => (
        <CardItem key={i} />
      ))}
    </div>
  )
}