import { useState, useEffect } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/Dropdown'
import { useAuth } from '../Auth/context'
import { type User } from '@auth0/auth0-react'
import { type UserInfo } from '@/services/user'
import { useTranslation } from 'react-i18next'
import { firstUpperCaseLetter } from '@/utils/str'
import { useNavigate } from 'react-router-dom'


export function UserDropdown() {
  const { isLogin, user, logout } = useAuth()
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)
  const navigate = useNavigate()

  const avatar = (user as User)?.picture
  const nickname = (user as User)?.nickname || ((user as UserInfo)?.nickName || (user as UserInfo)?.phoneNumber)
  
  useEffect(function () {
    setIsLoaded(false)
    if (avatar) {
      const img = new Image()
      img.src = avatar
      img.onload = function () {
        setIsLoaded(true)
      }
    }
  }, [avatar])
  
  if (!user || !isLogin) return null

  function jump () {
    setTimeout(function () {
      navigate('/user/settings')
    })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="!outline-none">
        <div className="flex items-center justify-center bg-primary-light rounded-full overflow-hidden w-[20px] h-[20px]">
          {isLoaded && <img src={avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />}
          {!isLoaded && <div className="text-white text-14 font-semibold">{firstUpperCaseLetter(nickname)}</div>}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={10} className="px-2.5 !py-2.5 !pt-5 w-[141px]">
        <DropdownMenuItem onClick={jump}>{nickname}</DropdownMenuItem>
        <DropdownMenuItem onClick={jump}>{t('accountCenter')}</DropdownMenuItem>
        <DropdownMenuSeparator className="bg-[#C2C2C2] w-full" />
        <DropdownMenuItem onClick={logout} className="hover:!bg-white hover:!text-[#6C6C6C]">
          <div className="text-[#FC4F4F] hover:opacity-80 text-sm">{t('logout')}</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}