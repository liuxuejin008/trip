import { AuthProvider } from '@/components/Auth/AuthProvider'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}
