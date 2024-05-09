import { axios } from './'
import type { Token } from '@/utils/token'

export function sendVerificationCode(phoneNumber: string) {
  return axios.post('/v1/send_verification_code', { phoneNumber })
}

export function phoneLogin(phoneNumber: string, code: string) {
  return axios.post<Token>('/v1/oauth2/phone_login', { phoneNumber, code })
}

export type UserInfo = {
  id: string;
  /**
   * 昵称
   */
  nickName?: string;
  /**
   * 手机号码
   */
  phoneNumber?: string;
  /**
   * 账号/邮箱
   */
  username?: string;
}
export function getUserInfo() {
  return axios.get<UserInfo>('/v1/user/getUserInfo')
}

export type UpdateUserInfo = Pick<UserInfo, 'nickName' | 'id'>
export function updateUserInfo(userInfo: UpdateUserInfo) {
  return axios.post('/v1/user/update', userInfo)
}
