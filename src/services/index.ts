import Axios from 'axios'
import { getToken } from '@/utils/token'

export const axios = Axios.create({
  baseURL: '/api',
})

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


axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getToken()}`
  return config
})


axios.interceptors.response.use((response) => {
  const data = response.data
  if (response.status === 401) {
    console.log('401')
  }
  return data
})
