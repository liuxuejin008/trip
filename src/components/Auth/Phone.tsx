import { useState, useEffect } from 'react'
import { DialogFooter } from '@/components/Dialog'
import Input from './Input'
import FormItem from './FormItem'
import Button from './Button'
import Dialog from './BaseDialog'
import useCountDown from '@/hooks/useCountDown'

type PhoneWithCodeProps = {
  onLogin: (phoneNumber: string, code: string) => void
  onSend: (phoneNumber: string) => void
}
function PhoneWithCode(props: PhoneWithCodeProps) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [code, setCode] = useState('')
  const { count, start } = useCountDown(60)

  useEffect(function () {
    start()
  }, [])

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
        <Button onClick={() => props.onLogin(phoneNumber, code)} className="bg-primary-light">登录</Button>
        <Button onClick={onSend} disabled={!!count} className={count ? 'bg-dark-light' : 'bg-error'}>{count ? `已发送验证码${count}s` : '发送验证码'}</Button>
      </DialogFooter>
    </>
  )
}

type PhoneNumberProps = {
  onSend: (phoneNumber: string) => void
}

function PhoneNumber(props: PhoneNumberProps) {
  const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <>
      <FormItem label="手机号码">
        <Input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="请输入手机号码" />
      </FormItem>
      <DialogFooter>
        <Button onClick={() => props.onSend(phoneNumber)} className="bg-primary-light">发送验证码</Button>
      </DialogFooter>
    </>
  )
}

const enum STEP {
  PHONE_NUMBER,
  PHONE_WITH_CODE
}

export default function Phone() {
  const [step, setStep] = useState(STEP.PHONE_NUMBER)

  function onSend(phoneNumber: string) {
    setStep(STEP.PHONE_WITH_CODE)
    console.log(phoneNumber)
  }

  function onLogin(phoneNumber: string, code: string) {
    console.log(phoneNumber, code)
  }

  return (
    <Dialog title="手机登录" open>
      {step === STEP.PHONE_NUMBER ? <PhoneNumber onSend={onSend} /> : <PhoneWithCode onSend={onSend} onLogin={onLogin} />}
    </Dialog>
  )
}

