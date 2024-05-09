import IconShare from '@/components/Icons/Share'
import { useToast } from '@/components/Toast/use-toast'

function copy(text: string) {
  const input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}

export default function ShareButton() {
  const { toast } = useToast()
  function onclick() {
    copy(window.location.href)
    toast({
      title: '已复制链接',
      icon: 'success'
    })
  }

  return (
    <button onClick={onclick} className="bg-primary-light w-[476px] h-[126px] rounded-36 flex items-center justify-center text-white text-36 mt-16">
      <IconShare className="w-[60px] h-[83px] text-warn-light mr-[74px]" />
      分享行程
    </button>
  )
}
