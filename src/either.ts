import * as NativeEither from 'fp-ts/lib/Either'

export type Either<A, B> = A | B

export const left = NativeEither.left
export const right = NativeEither.right
export const matchEither = NativeEither.match
