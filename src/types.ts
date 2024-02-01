import type Entity from './entity/entity'
import type * as _Option from 'fp-ts/lib/Option'
import type * as _IO from 'fp-ts/lib/IO'

export type IO<T> = _IO.IO<T>

export type Option<T> = _Option.Option<T>

export type EntityList = Entity[]

export type Maybe<A, B> = A | B

export type MaybeUndefined<T> = Maybe<T, undefined>

export type MaybeNullOrUndefined<T> = Maybe<null, MaybeUndefined<T>>

export type StringOrNotDefined = MaybeNullOrUndefined<string>

export type NumberOrNotDefined = MaybeNullOrUndefined<number>
