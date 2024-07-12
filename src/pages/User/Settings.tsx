import cs from 'classnames'
import { useState } from 'react'
import type { UserInfo } from '@/services/user'
import SettingDialog from '@/components/Auth/Setting'
import { useTranslation } from 'react-i18next'
import { isAuth0 } from '@/utils/auth'
import { type User } from '@auth0/auth0-react'
import { useAuth } from '@/components/Auth/context'

type ButtonProps = {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className={cs('w-[116px] h-9 rounded-18 flex items-center justify-center text-white text-18 font-semibold shadow-button2',props.className)}>
      {props.children}
    </button>
  )
}

type ListItemProps = {
  label: string
  value?: string
  onClick?: () => void
}
function ListItem (props: ListItemProps) {
  return (
    <div className="flex justify-between items-center text-18 w-[420px] mb-9 font-semibold">
      <span>{props.label}</span>
      <span>{props.value}</span>
      {/* <button className="border-none outline-none bg-none text-error-delete" onClick={props.onClick}>解绑</button> */}
    </div>
  )
}

export default function Settings() {
  const { t } = useTranslation()
  const { user, getUser, logout } = useAuth()
  const [userInfo, setUserInfo] = useState(user)
  const [open, setOpen] = useState(false)

  function onSuccess(userInfo: UserInfo) {
    setUserInfo(userInfo)
    getUser()
  }

  const nickname = isAuth0 ? (userInfo as User)?.nickname : ((userInfo as UserInfo)?.nickName || (userInfo as UserInfo)?.phoneNumber)
  const email = isAuth0 && (userInfo as User)?.email
  return (
    <>
      <div className="text-24">{t('nickname')}:<span className="ml-6">{nickname}</span></div>
      {email && <div className="text-24">{t('email')}:<span className="ml-6">{email}</span></div>}
      <div className="mt-9">
        <div className='flex gap-9'>
          {!isAuth0 && <Button onClick={() => setOpen(true)} className="bg-dark-light">{t('editNickname')}</Button>}
          {/* <Button className="bg-dark-light">修改密码</Button> */}
          <Button onClick={logout} className="bg-error">{t('logout')}</Button>
        </div>
      </div>
      <div className="mt-9">
        {/* <ListItem label="绑定微信" value="微信昵称" /> */}
        {!isAuth0 && <ListItem label={t('phoneNumber')} value={userInfo?.phoneNumber} />}
        {/* <ListItem label="绑定邮箱" value="xxxxx@gmail.com" /> */}
      </div>
      {!isAuth0 && <SettingDialog open={open} userInfo={userInfo as UserInfo} onOpenChange={setOpen} onSuccess={onSuccess} />}
    </>
  )
}
