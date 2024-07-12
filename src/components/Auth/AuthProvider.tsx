import { isLogin as _isLogin, setToken, type Token } from '@/utils/token'
import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import PhoneLogin from '@/components/Auth/Phone'
import { AuthContext } from './context'
import { type UserInfo, getUserInfo } from '@/services/user'
import { removeToken } from '@/utils/token'
import { useToast } from '@/components/Toast/use-toast'
import { useTranslation } from 'react-i18next'

export function AuthProvider({
  children
}: {
  children: React.ReactNode
}) {
  const { toast } = useToast()
  const { t } = useTranslation()
  const [userInfo, setUserInfo] = useState<UserInfo>()
  const [searchParams] = useSearchParams()
  const [open, setOpen] = useState<boolean>(searchParams.get('login') === 'true')
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(_isLogin())

  function login () {
    setOpen(true)
  }

  function onSuccess(token: Token) {
    setToken(token)
    setIsLogin(true)
    setOpen(false)
    navigate('/')
  }

  function getUser () {
    return getUserInfo().then(setUserInfo)
  }

  function logout() {
    removeToken()
    toast({
      title: t('logoutSuccess'),
    })

    setTimeout(function () {
      window.location.href = '/'
    }, 500)
  }

  useEffect(function () {
    if (isLogin) {
      getUser()
    }
  }, [isLogin])
  
  return (
    <AuthContext.Provider
      value={{
        isLogin,
        user: userInfo,
        getUser,
        login,
        logout
      }}
    >
      {children}
      <PhoneLogin open={open} onOpenChange={setOpen} onSuccess={onSuccess} />
    </AuthContext.Provider>
  )
}