import cs from 'classnames'
import DayCount from '@/components/DayCount'
import IconCity from '@/components/Icons/City'
import IconScenic from '@/components/Icons/Scenic'
import IconLine from '@/components/Icons/Line'

type SummarizeItemProps = {
  icon: React.ReactNode
  label: React.ReactNode
  count: React.ReactNode
  className?: string
}
function SummarizeItem (props: SummarizeItemProps) {
  return (
    <div className={cs('flex px-20 items-center h-[54px]', props.className)}>
      {props.icon}
      <div className="ml-4 text-dark3 font-medium">
        <div className="text-16 leading-22">{props.label}</div>
        <div className="text-20 leading-7">{props.count}</div>
      </div>
    </div>
  )
}

export default function Summarize() {
  return (
    <div className="pt-28 flex flex-col justify-center items-center">
      <h1 className="text-dark text-center text-36 font-medium">涠洲岛出行精选攻略</h1>
      <DayCount className="mt-14">
        共3天
      </DayCount>
      <div className="mt-14 flex justify-center">
        <SummarizeItem className="border-r border-gray-999" icon={<IconCity className="w-8 h-8" />} label="城市" count="1" />
        <SummarizeItem className="border-r border-gray-999" icon={<IconScenic className="w-8 h-8" />} label="景点" count="5" />
        <SummarizeItem icon={<IconLine className="w-8 h-8" />} label="公里" count="90" />
      </div>
    </div>
  )
}