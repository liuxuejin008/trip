import { lazy, Suspense } from 'react'
import cs from 'classnames'
import { Drawer } from 'vaul'
import { useState } from 'react'
import { getFullDate } from '@/utils/date'
import type { DateRange } from 'react-day-picker'

const Panel = lazy(() => import('./Panel'))

export type DateRangePickerProps = {
  className?: string
}

export default function DateRangePicker(props: DateRangePickerProps) {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date()
  })
  const [open, setOpen] = useState(false)

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger>
        <div className={cs('shadow-date w-[387px] h-[62px] box-border rounded-36 flex items-center justify-center text-white text-20 font-medium bg-dark-light border border-dark-light-5 cursor-pointer hover:border-white transition-border', props.className)}>{getFullDate(range?.from)} - {getFullDate(range?.to)}</div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content className="fixed bottom-0 z-10">
          <Suspense>
            <Panel open={open} setOpen={setOpen} range={range} onSelect={setRange} />
          </Suspense>
        </Drawer.Content>
        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  )
}