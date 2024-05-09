import { axios } from './'

export function sendVerificationCode(phoneNumber: string) {
  return axios.post('/v1/send_verification_code', { phoneNumber })
}

export function phoneLogin(phoneNumber: string, code: string) {
  return axios.post<string>('/v1/oauth2/phone_login', { phoneNumber, code })
}
