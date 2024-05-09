'use client'

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './toast'
import { useToast } from './use-toast'
import IconSuccess from '@/components/Icons/Success'
import IconError from '@/components/Icons/Error'
import IconLoading from '@/components/Icons/Loading'

const icons = {
  success: IconSuccess,
  error: IconError,
  loading: IconLoading,
}

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, icon, description, action, ...props }) {
        const Icon = icon && icons[icon]

        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle className="flex items-center !text-24">
               {Icon ? <Icon className="w-16 h-16 mr-6" /> : null}  {title}
              </ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
