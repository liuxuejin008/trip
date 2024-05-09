import { useState, useEffect } from 'react'
import { DialogFooter } from '@/components/Dialog'
import Input from './Input'
import FormItem from './FormItem'
import Button from './Button'
import Dialog from './BaseDialog'
import useCountDown from '@/hooks/useCountDown'

type EmailWithCodeProps = {
  onLogin: (email: string, code: string) => void
  onSend: (email: string) => void
}
function EmailWithCode(props: EmailWithCodeProps) {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const { count, start } = useCountDown(60)

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
        <FormItem label="邮箱账号">
          <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="请输入邮箱账号" />
        </FormItem>
        <FormItem label="验证码">
          <Input value={code} onChange={e => setCode(e.target.value)} placeholder="请输入验证码" />
        </FormItem>
        <div className="font-semibold text-20 ml-48">已发送到你的邮箱，请在邮箱中查收</div>
      </div>
      <DialogFooter>
        <Button onClick={() => props.onLogin(email, code)} className="bg-primary-light">登录</Button>
        <Button onClick={onSend} disabled={!!count} className={count ? 'bg-dark-light' : 'bg-error'}>{count ? `已发送验证码${count}s` : '发送验证码'}</Button>
      </DialogFooter>
    </>
  )
}

type EmailAddressProps = {
  onSend: (email: string) => void
}

function EmailAddress(props: EmailAddressProps) {
  const [email, setEmail] = useState('')

  return (
    <>
      <FormItem label="邮箱账号">
        <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="请输入邮箱账号" />
      </FormItem>
      <DialogFooter>
        <Button onClick={() => props.onSend(email)} className="bg-primary-light">发送验证码</Button>
      </DialogFooter>
    </>
  )
}

const enum STEP {
  EMAIL,
  EMAIL_WITH_CODE
}

export default function Email() {
  const [step, setStep] = useState(STEP.EMAIL)

  function onSend(email: string) {
    setStep(STEP.EMAIL_WITH_CODE)
    console.log(email)
  }

  function onLogin(email: string, code: string) {
    console.log(email, code)
  }

  return (
    <Dialog title="邮箱登录" open>
      {step === STEP.EMAIL ? <EmailAddress onSend={onSend} /> : <EmailWithCode onSend={onSend} onLogin={onLogin} />}
    </Dialog>
  )
}

