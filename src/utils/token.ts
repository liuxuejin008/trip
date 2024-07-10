const TOKEN_KEY = 'token'
import { isAuth0 } from './auth'
import { getAccessToken } from '@/components/Auth0/Auth0'

export type Token = {
  accessToken: string;
  tokenType: string;
}

export const getToken = () => {
  if (isAuth0) {
    return getAccessToken()
  }
  
  const tokenStr = localStorage.getItem(TOKEN_KEY)
  if (tokenStr) {
    const token = JSON.parse(tokenStr) as Token
    return `${token.tokenType} ${token.accessToken}`
  }
  return null
}

export const setToken = (token: Token) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
}

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}

export const isLogin = () => {
  return !!getToken()
}
