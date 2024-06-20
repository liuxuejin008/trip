import { DialogFooter } from '@/components/Dialog'
import Input from './Input'
import FormItem from './FormItem'
import Button from './Button'
import Dialog from './BaseDialog'
import { useTranslation } from 'react-i18next'

export default function Login() {
  const { t } = useTranslation()
  return (
    <Dialog title={t('emailLogin')} className="pt-11" open>
      <div className="flex flex-col gap-8">
        <FormItem label={t('email')}>
          <Input placeholder={t('emailAddressPlaceholder')} />
        </FormItem>
        <FormItem label={t('password')}>
          <Input type="password" placeholder={t('passwordPlaceholder')} />
        </FormItem>
      </div>
      <DialogFooter>
        <Button className="bg-primary-light">{t('register')}</Button>
        <Button className="bg-primary-light">{t('login')}</Button>
      </DialogFooter>
    </Dialog>
  )
}
