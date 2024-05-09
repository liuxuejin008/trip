import { DialogFooter } from '@/components/Dialog'
import Input from './Input'
import FormItem from './FormItem'
import Button from './Button'
import Dialog from './BaseDialog'

export default function Login() {
  return (
    <Dialog title="邮箱登录" className="pt-11" open>
      <div className="flex flex-col gap-8">
        <FormItem label="邮箱账号">
          <Input placeholder="请输入你的邮箱地址" />
        </FormItem>
        <FormItem label="密码">
          <Input type="password" placeholder="请输入你的密码" />
        </FormItem>
      </div>
      <DialogFooter>
        <Button className="bg-primary-light">注册</Button>
        <Button className="bg-primary-light">登录</Button>
      </DialogFooter>
    </Dialog>
  )
}
