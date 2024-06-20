import { useState, useEffect } from 'react'
import { DialogFooter } from '@/components/Dialog'
import Input from './Input'
import FormItem from './FormItem'
import Button from './Button'
import Dialog from './BaseDialog'
import useCountDown from '@/hooks/useCountDown'
import { useTranslation } from 'react-i18next'

type EmailWithCodeProps = {
  onLogin: (email: string, code: string) => void
  onSend: (email: string) => void
}
function EmailWithCode(props: EmailWithCodeProps) {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const { count, start } = useCountDown(60)
  const { t } = useTranslation()
  useEffect(function () {
    start()
  }, [])

  function onSend () {
    start()
    props.onSend(email)
  }

  return (
    <>
      <div className="flex flex-col gap-8">
        <FormItem label={t('email')}>
          <Input value={email} onChange={e => setEmail(e.target.value)} placeholder={t('emailPlaceholder')} />
        </FormItem>
        <FormItem label={t('code')}>
          <Input value={code} onChange={e => setCode(e.target.value)} placeholder={t('codePlaceholder')} />
        </FormItem>
        <div className="font-semibold text-20 ml-48">{t('emailCodeTip')}</div>
      </div>
      <DialogFooter>
        <Button onClick={() => props.onLogin(email, code)} className="bg-primary-light">{t('login')}</Button>
        <Button onClick={onSend} disabled={!!count} className={count ? 'bg-dark-light' : 'bg-error'}>{count ? t('codeSended', {count}) : t('sendCode')}</Button>
      </DialogFooter>
    </>
  )
}

type EmailAddressProps = {
  onSend: (email: string) => void
}

function EmailAddress(props: EmailAddressProps) {
  const [email, setEmail] = useState('')
  const { t } = useTranslation()

  return (
    <>
      <FormItem label={t('email')}>
        <Input value={email} onChange={e => setEmail(e.target.value)} placeholder={t('emailPlaceholder')} />
      </FormItem>
      <DialogFooter>
        <Button onClick={() => props.onSend(email)} className="bg-primary-light">{t('sendCode')}</Button>
      </DialogFooter>
    </>
  )
}

const enum STEP {
  EMAIL,
  EMAIL_WITH_CODE
}

export default function Email() {
  const { t } = useTranslation()
  const [step, setStep] = useState(STEP.EMAIL)

  function onSend(email: string) {
    setStep(STEP.EMAIL_WITH_CODE)
    console.log(email)
  }

  function onLogin(email: string, code: string) {
    console.log(email, code)
  }

  return (
    <Dialog title={t('emailLogin')} open>
      {step === STEP.EMAIL ? <EmailAddress onSend={onSend} /> : <EmailWithCode onSend={onSend} onLogin={onLogin} />}
    </Dialog>
  )
}

