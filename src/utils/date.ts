import { zhCN, enUS } from 'date-fns/locale'
import { format } from 'date-fns'
import { i18n, CACHE_KEY } from '@/i18n'

window.__localeId__ = localStorage.getItem(CACHE_KEY) === 'en' ? enUS : zhCN
i18n.on('languageChanged', (lng) => {
  if (lng === 'en') {
    window.__localeId__ = enUS
  } else {
    window.__localeId__ = zhCN
  }
})

export function getMonthDate(date?: Date) {
  const str = i18n.language === 'en' ? 'MM-dd' : 'M月d日'
  return date ? format(date, str) : ''
}

export function getFullDate(date?: Date) {
  const str = i18n.language === 'en' ? 'yyyy-MM-dd' : 'yyyy年M月d日'
  return date ? format(date, str) : ''
}

export function getWeekDay(date?: Date) {
  return date ? format(date, 'EE') : ''
}

export function getFormateDate(date?: Date) {
  return date ? format(date, 'yyyy-MM-dd') : ''
}
