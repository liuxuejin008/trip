import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zh from './locales/zh.json'
import en from './locales/en.json'

export const languageList = [
  {
    label: 'EN',
    value: 'en'
  },
  {
    label: '中',
    value: 'zh'
  }
] as const

export const CACHE_KEY = 'lang'

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
    lng: localStorage.getItem(CACHE_KEY) || 'zh',
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    }
  })

export { i18n }
export default i18n
