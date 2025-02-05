import type { IEqualizable } from './primitives/oop/equalizable'

export interface I_UID<UIDType> extends IEqualizable {
  readonly value: UIDType
}
