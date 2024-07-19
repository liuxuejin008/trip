import Axios from 'axios'
import { getToken, removeToken } from '@/utils/token'
import { toast } from '@/components/Toast/use-toast'
import { isAuth0 } from '@/utils/auth'
import { loginWithRedirect } from '@/components/Auth0/Auth0'

export const axios = Axios.create({
  baseURL: '/api',
})

export type Page<T extends object = any> = {
  page: number
  pageSize: number
} & T

export type PageResponse<T> = Page<{
  total: number
  list: T[]
}>

declare module 'axios' {
  export interface AxiosInstance {
    request<R = any, D = any>(config: AxiosRequestConfig<D>): Promise<R>
    get<R = any, D = any>(
      url: string,
      config?: AxiosRequestConfig<D>
    ): Promise<R>
    delete<R = any, D = any>(
      url: string,
      config?: AxiosRequestConfig<D>
    ): Promise<R>
    head<R = any, D = any>(
      url: string,
      config?: AxiosRequestConfig<D>
    ): Promise<R>
    options<R = any, D = any>(
      url: string,
      config?: AxiosRequestConfig<D>
    ): Promise<R>
    post<R = any, D = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>
    ): Promise<R>
    put<R = any, D = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>
    ): Promise<R>
    patch<R = any, D = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>
    ): Promise<R>
  }
}


axios.interceptors.request.use(async (config) => {
  config.headers.Authorization = await getToken()
  return config
})


let redirecting = false

axios.interceptors.response.use((response) => {
  if (response.status === 200 && response.data.code === 200) {
    const data = response.data
    return data.data
  }
  return Promise.reject(response.data)
}, (error) => {
  if (error.response.status === 401) {
    setTimeout(function () {
      toast({
        title: '登录已过期，请重新登录',
        icon: 'error',
      })
    })
    removeToken()
    if (redirecting) {
      return Promise.reject(error)
    } else {
      redirecting = true
      setTimeout(() => {
        if (isAuth0) {
          loginWithRedirect()
        } else {
          window.location.href = '/?login=true'
        }
      }, 500)
      return Promise.reject(error)
    }
  }
  return Promise.reject(error)
})
