import * as _Option from 'fp-ts/lib/Option'

export type Option<T> = _Option.Option<T>
export const matchOption = _Option.match
export const some = _Option.some
export const none = _Option.none
export const fromNullableOption = _Option.fromNullable
