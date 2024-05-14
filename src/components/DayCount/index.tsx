import DecorateLine from '@/components/Icons/DecorateLine'
import cs from 'classnames'

type DayCountProps = {
  children?: React.ReactNode
  className?: string
}
export default function DayCount(props: DayCountProps) {
  return (
    <div className={cs('flex items-center gap-6', props.className)}>
      <DecorateLine className="w-[121px] h-5" />
      <div className="flex relative flex-col items-center text-24 font-medium text-dark after:absolute after:w-24 after:h-2.5 after:opacity-50 after:bg-line after:bottom-0.5">
        {props.children}
      </div>
      <DecorateLine className="w-[121px] h-5 rotate-180" />
    </div>
  )
}
