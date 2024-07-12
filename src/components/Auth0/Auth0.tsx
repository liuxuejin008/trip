import { useEffect } from 'react'
import { useAuth0, type GetTokenSilentlyOptions, type RedirectLoginOptions, type AppState, type LogoutOptions } from '@auth0/auth0-react'
import { AuthContext } from '../Auth/context'
import { refreshUser } from '@/services/user'
import { Loading } from '../Loading2'

type Auth0Instance = ReturnType<typeof useAuth0>
let auth0Instance: Auth0Instance

let resolve: (value: boolean) => void
const readyPromise = new Promise<boolean>(function (_resolve) {
  resolve = _resolve
})

export const getAccessToken = function (options?: GetTokenSilentlyOptions) {
  return readyPromise.then(function () {
    return auth0Instance.getAccessTokenSilently(options)
  }).then(function (token) {
    return `Bearer ${token}`
  })
}

export const loginWithRedirect = function (options?: RedirectLoginOptions<AppState>) {
  return readyPromise.then(function () {
    return auth0Instance.loginWithRedirect(options)
  })
}
export const logout = function (options?: LogoutOptions) {
  return readyPromise.then(function () {
    return auth0Instance.logout(options)
  })
}

export const getUserInfo = function () {
  return readyPromise.then(function () {
    return auth0Instance.user
  })
}

export function Auth0({ children }: { children: React.ReactNode }) {
  const auth0 = useAuth0()
  const { isAuthenticated: isLogin, isLoading, error, loginWithRedirect: login } = auth0
  useEffect(function () {
    if (!auth0Instance) {
      resolve(true)
    }
    auth0Instance = auth0
  }, [auth0])

  useEffect(function () {
    if (isLogin) {
      refreshUser()
    }
  }, [isLogin])

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        login
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}