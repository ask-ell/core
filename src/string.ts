import { type MaybeUndefined } from './undefined'

export type StringOrUndefined = MaybeUndefined<string>
export const string = <D>(data: D): string => JSON.stringify(data)
export const length = (data: string): number => data.length
export const isEmptyString = (data: string): boolean => length(data) > 0
