import { Auth0Provider } from './Auth0Provider'
import { Auth0 } from './Auth0'

export function AuthProvider({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <Auth0Provider>
      <Auth0>
        {children}
      </Auth0>
    </Auth0Provider>
  )
}