import { type MaybeNullOrUndefined } from './types'

export function isDefinedAndNotNull<T>(obj: MaybeNullOrUndefined<T>): obj is T {
  return !isUndefinedOrNull(obj)
}

export function isUndefinedOrNull<T>(
  obj: MaybeNullOrUndefined<T>
): obj is undefined | null {
  return obj === undefined || obj === null
}
