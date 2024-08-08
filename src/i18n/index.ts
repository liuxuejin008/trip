import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zh from './locales/zh.json'
import en from './locales/en.json'
import Cookie from 'js-cookie'

export const languageList = [
  {
    label: 'English',
    value: 'en'
  },
  {
    label: '中文简体',
    value: 'zh'
  }
] as const

export const CACHE_KEY = 'lang'
export function getLang() {
  return Cookie.get(CACHE_KEY) || 'en'
}
export function setLang(lang: string) {
  Cookie.set(CACHE_KEY, lang)
}

const resources = {
  en: {
    translation: en
  },
  zh: {
    translation: zh
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getLang(),
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    }
  })

export { i18n }
export default i18n
