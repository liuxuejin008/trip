import { isBefore } from 'date-fns'

export function setPersistentLocation(data: { location: string, startTime: string, endTime: string }) {
  localStorage.setItem('location', data.location)
  localStorage.setItem('startTime', data.startTime)
  localStorage.setItem('endTime', data.endTime)
}

function formatDate (time?: string | null) {
  const dateTime = new Date(time || new Date())
  return isBefore(dateTime, new Date()) ? new Date() : dateTime
}

export function getPersistentLocation() {
  const location = localStorage.getItem('location') || ''
  const startTime = formatDate(localStorage.getItem('startTime'))
  const endTime = formatDate(localStorage.getItem('endTime'))
  return { location, startTime, endTime }
}
