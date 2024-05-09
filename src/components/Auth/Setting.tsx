import { DialogFooter } from '@/components/Dialog'
import Input from './Input'
import FormItem from './FormItem'
import Button from './Button'
import Dialog from './BaseDialog'

export default function Setting() {
  return (
    <Dialog title="账号设置" className="pt-11" open>
      <div className="flex flex-col gap-8">
        <FormItem label="昵称">
          <Input placeholder="请输入你的昵称，不超过8个字符" />
        </FormItem>
        <FormItem label="密码">
          <Input type="password" placeholder="设置你的密码，不超过16个字符" />
        </FormItem>
        <FormItem label="确认密码">
          <Input type="password" placeholder="确认密码" />
        </FormItem>
      </div>
      <DialogFooter>
        <Button className="bg-primary-light">确认</Button>
        <Button className="bg-error">取消</Button>
      </DialogFooter>
    </Dialog>
  )
}
