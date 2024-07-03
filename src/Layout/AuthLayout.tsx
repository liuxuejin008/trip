import { AuthProvider } from '@/components/Auth/AuthProvider'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'

export default function AuthLayout() {
  return (
    <AuthProvider>
      <Header />
      <Outlet />
    </AuthProvider>
  )
}
