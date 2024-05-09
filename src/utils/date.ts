import { zhCN } from 'date-fns/locale'
import { format } from 'date-fns'

window.__localeId__ = zhCN

export function getMonthDate(date?: Date) {
  return date ? format(date, 'M月d日') : ''
}

export function getFullDate(date?: Date) {
  return date ? format(date, 'yyyy年M月d日') : ''
}

export function getWeekDay(date?: Date) {
  return date ? format(date, 'EE', {locale: zhCN}) : ''
}
