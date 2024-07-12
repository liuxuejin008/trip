export function firstUpperCaseLetter(str?: string) {
  if (!str || str.length === 0) return ''
  return str[0].toUpperCase()
}