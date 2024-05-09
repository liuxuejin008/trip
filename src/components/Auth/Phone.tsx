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
        <FormItem label="手机号码">
          <Input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="请输入手机号码" />
        </FormItem>
        <FormItem label="验证码">
          <Input value={code} onChange={e => setCode(e.target.value)} placeholder="请输入验证码" />
        </FormItem>
        <div className="font-semibold text-20 ml-48">已发送到你的手机，请在短信中查收</div>
      </div>
      <DialogFooter>
        <Button disabled={props.logining} onClick={() => props.onLogin(phoneNumber, code)} className={cs('bg-primary-light', props.logining && 'cursor-wait')}>登录</Button>
        <Button onClick={onSend} disabled={!!count || props.sending} className={count || props.sending ? 'bg-dark-light' : 'bg-error'}>{count ? `已发送验证码${count}s` : '发送验证码'}</Button>
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

  return (
    <>
      <FormItem label="手机号码">
        <Input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="请输入手机号码" />
      </FormItem>
      <DialogFooter>
        <Button disabled={props.sending} onClick={() => props.onSend(phoneNumber)} className={cs('bg-primary-light', props.sending && 'cursor-wait')}>发送验证码</Button>
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
        title: '请输入正确的手机号码',
        icon: 'error',
      })
      return
    }
    try {
      setSending(true)
      await sendVerificationCode(phoneNumber)
      setStep(STEP.PHONE_WITH_CODE)
      toast({
        title: '发送验证码成功',
        icon: 'success',
      })
    } catch (e) {
      toast({
        title: '发送验证码失败',
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
        title: '正在登录...',
        icon: 'loading',
      })
      const token = await phoneLogin(phoneNumber, code)
      props.onSuccess(token)
      dismiss(id)
      toast({
        title: '登录成功',
        icon: 'success',
      })
    } catch (e) {
      toast({
        title: '登录失败',
        icon: 'error',
      })
    } finally {
      setLogining(false)
    }
  }

  return (
    <Dialog title="手机登录" open={props.open} onOpenChange={props.onOpenChange}>
      {step === STEP.PHONE_NUMBER ? <PhoneNumber sending={sending} onSend={onSend} /> : <PhoneWithCode phoneNumber={phoneNumber} sending={sending} logining={logining} onSend={onSend} onLogin={onLogin} />}
    </Dialog>
  )
}

