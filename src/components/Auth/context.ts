
import { createContext, useContext } from 'react'

export type AuthContextState = {
  isLogin: boolean
  login: () => void
}
export const AuthContext = createContext<AuthContextState>({
  isLogin: false,
  login: () => {}
})


export function useAuth () {
  return useContext(AuthContext)
}
