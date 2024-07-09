import { useToast } from '@/components/Toast/use-toast'
import { useTranslation } from 'react-i18next'

export function copy(text: string) {
  const input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}


export function useCopy () {
  const { t } = useTranslation()
  const { toast } = useToast()

  function onCopy(text?: string, tip?: string) {
    copy(text || window.location.href)
    toast({
      title: tip || t('copySuccess'),
      icon: 'success'
    })
  }

  return { onCopy }
}