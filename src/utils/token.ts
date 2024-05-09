const TOKEN_KEY = 'token'
export type Token = {
  accessToken: string;
  tokenType: string;
}

export const getToken = () => {
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
