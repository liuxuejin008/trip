import { AuthProvider as PhoneAuthProvider } from '@/components/Auth/AuthProvider'
import { AuthProvider as Auth0Provider } from '@/components/Auth0/AuthProvider'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { isAuth0 } from '@/utils/auth'
import { Footer } from '@/components/Footer'

const AuthProvider = isAuth0 ? Auth0Provider : PhoneAuthProvider
console.log(import.meta.env.VITE_AUTH_TYPE)
export default function AuthLayout() {
  return (
    <AuthProvider>
      <Header />
      <Outlet />
      <Footer />
    </AuthProvider>
  )
}
