import { createContext, useContext } from 'react'
import { isLogin as _isLogin, setToken, type Token } from '@/utils/token'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import PhoneLogin from '@/components/Auth/Phone'

export type AuthContextState = {
  isLogin: boolean
  login: () => void
}
const AuthContext = createContext<AuthContextState>({
  isLogin: _isLogin(),
  login: () => {}
})


export function useAuth () {
  return useContext(AuthContext)
}

export function AuthProvider({
  children
}: {
  children: React.ReactNode
}) {
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

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        login
      }}
    >
      {children}
      <PhoneLogin open={open} onOpenChange={setOpen} onSuccess={onSuccess} />
    </AuthContext.Provider>
  )
}