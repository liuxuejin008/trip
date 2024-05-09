import { Dialog, DialogContent, DialogHeader } from '@/components/Dialog'
import cs from 'classnames'

type BaseDialogProps = {
  open: boolean
  onOpenChange?: (open: boolean) => void
  title?: React.ReactNode
  children: React.ReactNode
  className?: string
}
export default function BaseDialog(props: BaseDialogProps) {
  return (
    <Dialog open onOpenChange={props.onOpenChange}>
      <DialogContent className={cs('h-[524px] w-[760px]', props.className)}>
        <DialogHeader>
          {props.title}
        </DialogHeader>
        {props.children}
      </DialogContent>
    </Dialog>
  )
}
