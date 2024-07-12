import { useEffect, useState } from 'react'
import { useAuth0, type GetTokenSilentlyOptions, type RedirectLoginOptions, type AppState, type LogoutOptions, type User } from '@auth0/auth0-react'
import { AuthContext } from '../Auth/context'
import { refreshUser } from '@/services/user'
import { Loading } from '../Loading2'
import { useToast } from '@/components/Toast/use-toast'
import { useTranslation } from 'react-i18next'

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
  const { toast } = useToast()
  const { t } = useTranslation()
  const auth0 = useAuth0()
  const [user, setUser] = useState<User>()
  const { isAuthenticated: isLogin, isLoading, error, loginWithRedirect: login } = auth0
  useEffect(function () {
    if (!auth0Instance) {
      resolve(true)
    }
    auth0Instance = auth0
  }, [auth0])

  function getUser () {
    return getUserInfo().then(setUser)
  }

  async function logout () {
    try {
      await auth0.logout()
      toast({
        title: t('logoutSuccess'),
      })
    } catch (e: any) {
      toast({
        title: e.message,
        icon: 'error'
      })
    }
  }

  useEffect(function () {
    if (isLogin) {
      refreshUser()
      getUser()
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
        login,
        user,
        getUser,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}