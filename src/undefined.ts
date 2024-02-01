import { type Either } from './either'

export type MaybeUndefined<T> = Either<T, undefined>
