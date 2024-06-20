import { useState, useEffect } from 'react'
import { DialogFooter } from '@/components/Dialog'
import Input from './Input'
import FormItem from './FormItem'
import Button from './Button'
import Dialog from './BaseDialog'
import useCountDown from '@/hooks/useCountDown'
import { sendVerificationCode, phoneLogin } from '@/services/user'
import { useToast } from '@/components/Toast/use-toast'
import { Token } from '@/utils/token'
import cs from 'classnames'
import { useTranslation } from 'react-i18next'

function validatePhoneNumber(phoneNumber: string) {
  return phoneNumber && phoneNumber.length === 11
}

type PhoneWithCodeProps = {
  onLogin: (phoneNumber: string, code: string) => void
  onSend: (phoneNumber: string) => void
  sending: boolean
  logining: boolean
  phoneNumber: string
}
function PhoneWithCode(props: PhoneWithCodeProps) {
  const { t } = useTranslation()
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber)
  const [code, setCode] = useState('')
  const { count, start } = useCountDown(60)

  useEffect(function () {
    start()
  }, [])

  useEffect(function () {
    setPhoneNumber(props.phoneNumber)
  }, [props.phoneNumber])

  function onSend () {
    start()
    props.onSend(phoneNumber)
  }

  return (
    <>
      <div className="flex flex-col gap-8">
        <FormItem label={t('phoneNumber')}>
          <Input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder={t('phoneNumberPlaceholder')} />
        </FormItem>
        <FormItem label={t('code')}>
          <Input value={code} onChange={e => setCode(e.target.value)} placeholder={t('codePlaceholder')} />
        </FormItem>
        <div className="font-semibold text-20 ml-48">{t('phoneCodeSended')}</div>
      </div>
      <DialogFooter>
        <Button disabled={props.logining} onClick={() => props.onLogin(phoneNumber, code)} className={cs('bg-primary-light', props.logining && 'cursor-wait')}>{t('login')}</Button>
        <Button onClick={onSend} disabled={!!count || props.sending} className={count || props.sending ? 'bg-dark-light' : 'bg-error'}>{count ? t('codeSended', {count}) : t('sendCode')}</Button>
      </DialogFooter>
    </>
  )
}

type PhoneNumberProps = {
  onSend: (phoneNumber: string) => void
  sending: boolean
}

function PhoneNumber(props: PhoneNumberProps) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const { t } = useTranslation()

  return (
    <>
      <FormItem label={t('phoneNumber')}>
        <Input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder={t('phoneNumberPlaceholder')} />
      </FormItem>
      <DialogFooter>
        <Button disabled={props.sending} onClick={() => props.onSend(phoneNumber)} className={cs('bg-primary-light', props.sending && 'cursor-wait')}>{t('sendCode')}</Button>
      </DialogFooter>
    </>
  )
}

const enum STEP {
  PHONE_NUMBER,
  PHONE_WITH_CODE
}

type PhoneProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: (token: Token) => void
}
export default function Phone(props: PhoneProps) {
  const { t } = useTranslation()
  const {toast, dismiss} = useToast()
  const [step, setStep] = useState(STEP.PHONE_NUMBER)
  const [sending, setSending] = useState(false)
  const [logining, setLogining] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')

  async function onSend(phoneNumber: string) {
    // todo use message component to replace
    setPhoneNumber(phoneNumber)
    if (!validatePhoneNumber(phoneNumber)) {
      toast({
        title: t('phoneNumberInvalid'),
        icon: 'error',
      })
      return
    }
    try {
      setSending(true)
      await sendVerificationCode(phoneNumber)
      setStep(STEP.PHONE_WITH_CODE)
      toast({
        title: t('sendCodeSuccess'),
        icon: 'success',
      })
    } catch (e: any) {
      toast({
        title: e.message || t('sendCodeFail'),
        icon: 'error',
      })
    } finally {
      setSending(false)
    }
  }

  async function onLogin(phoneNumber: string, code: string) {
    try {
      setLogining(true)
      const { id } = toast({
        title: t('logining'),
        icon: 'loading',
      })
      const token = await phoneLogin(phoneNumber, code)
      props.onSuccess(token)
      dismiss(id)
      toast({
        title: t('loginSuccess'),
        icon: 'success',
      })
    } catch (e: any) {
      toast({
        title: e.message || t('loginFail'),
        icon: 'error',
      })
    } finally {
      setLogining(false)
    }
  }

  return (
    <Dialog title={t('phoneNumberLogin')} open={props.open} onOpenChange={props.onOpenChange}>
      {step === STEP.PHONE_NUMBER ? <PhoneNumber sending={sending} onSend={onSend} /> : <PhoneWithCode phoneNumber={phoneNumber} sending={sending} logining={logining} onSend={onSend} onLogin={onLogin} />}
    </Dialog>
  )
}

