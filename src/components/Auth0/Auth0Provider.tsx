import { Auth0Provider as Auth0ProviderPrimitive, type AppState } from '@auth0/auth0-react'

export function Auth0Provider({ children }: {
  children: React.ReactNode;
}) {

  const domain = import.meta.env.VITE_AUTH0_DOMAIN
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
  const redirectUri = window.location.origin
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE

  const onRedirectCallback = (appState?: AppState) => {
    location.href = appState?.returnTo || window.location.pathname
  }

  if (!(domain && clientId && redirectUri && audience)) {
    return null
  }

  return (
    <Auth0ProviderPrimitive
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        audience: audience,
        redirect_uri: redirectUri,
        scope: 'read:current_user openid profile email offline_access'
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0ProviderPrimitive>
  )
}
