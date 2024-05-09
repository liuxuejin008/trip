import { DialogFooter } from '@/components/Dialog'
import Input from './Input'
import FormItem from './FormItem'
import Button from './Button'
import Dialog from './BaseDialog'
import { updateUserInfo } from '@/services/user'
import type { UserInfo } from '@/services/user'
import { useState, useEffect } from 'react'
import { useToast } from '@/components/Toast/use-toast'

type SettingProps = {
  userInfo?: UserInfo
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess?: (userInfo: UserInfo) => void
}
export default function Setting(props: SettingProps) {
  const [nickName, setNickName] = useState(props.userInfo?.nickName)
  const { toast, dismiss } = useToast()
  async function onConfirm() {
    if (!nickName) {
      toast({
        title: '昵称不能为空',
        icon: 'error'
      })
      return
    }

    const { id } = toast({
      title: '正在保存...',
      icon: 'loading'
    })
    try {
      await updateUserInfo({
        nickName,
        id: props.userInfo!.id
      })
      props.onOpenChange(false)
      props.onSuccess?.({
        ...props.userInfo!,
        nickName
      })
      toast({
        title: '保存成功',
        icon: 'success'
      })
    } catch (e) {
      toast({
        title: '保存失败',
        icon: 'error'
      })
    } finally {
      dismiss(id)
    }
  }

  useEffect(function () {
    setNickName(props.userInfo?.nickName)
  }, [props.userInfo?.nickName])

  return (
    <Dialog title="账号设置" className="pt-11" open={props.open} onOpenChange={props.onOpenChange}>
      <div className="flex flex-col gap-8">
        <FormItem label="昵称">
          <Input value={nickName} onChange={e => setNickName(e.target.value)} placeholder="请输入你的昵称，不超过8个字符" />
        </FormItem>
        {/* <FormItem label="密码">
          <Input type="password" placeholder="设置你的密码，不超过16个字符" />
        </FormItem>
        <FormItem label="确认密码">
          <Input type="password" placeholder="确认密码" />
        </FormItem> */}
      </div>
      <DialogFooter>
        <Button onClick={onConfirm} className="bg-primary-light">确认</Button>
        <Button onClick={() => props.onOpenChange(false)} className="bg-error">取消</Button>
      </DialogFooter>
    </Dialog>
  )
}
