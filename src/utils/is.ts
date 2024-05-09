function isType<T>(type: string) {
  return (value: unknown): value is T => {
    return typeof value === typeof type
  }
}

export const isString = isType<string>('string')
export const isNumber = isType<number>('number')
export const isBoolean = isType<boolean>('boolean')
export const isUndefined = isType<undefined>('undefined')

export function isNull(value: unknown): value is null {
  return value === null
}

export function isNil(value: unknown): value is null | undefined {
  return isUndefined(value) || isNull(value)
}
