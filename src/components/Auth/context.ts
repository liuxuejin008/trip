
import { createContext, useContext } from 'react'
import { type User } from '@auth0/auth0-react'
import { type UserInfo } from '@/services/user'

export type AuthContextState = {
  isLogin: boolean
  login: () => void
  logout: () => void
  user?: UserInfo | User
  getUser: () => Promise<void>
}
export const AuthContext = createContext<AuthContextState>({
  isLogin: false,
  login: () => {},
  getUser: async () => {},
  logout: () => {}
})


export function useAuth () {
  return useContext(AuthContext)
}
