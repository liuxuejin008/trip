import IconShare from '@/components/Icons/Share'
import { useToast } from '@/components/Toast/use-toast'
import { useTranslation } from 'react-i18next'

function copy(text: string) {
  const input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}

export default function ShareButton() {
  const { t } = useTranslation()
  const { toast } = useToast()
  function onclick() {
    copy(window.location.href)
    toast({
      title: t('copySuccess'),
      icon: 'success'
    })
  }

  return (
    <button onClick={onclick} className="bg-primary-light w-[476px] h-[126px] rounded-36 flex items-center justify-center text-white text-36 mt-16">
      <IconShare className="w-[60px] h-[83px] text-warn-light mr-[74px]" />
      {t('shareTour')}
    </button>
  )
}
