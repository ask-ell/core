import type { IEqualizable } from './primitives/oop/equalizable'

export interface I_UID<ValueType> extends IEqualizable<I_UID<ValueType>> {
  readonly value: ValueType
}
