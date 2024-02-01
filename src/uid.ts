import type Equalizable from './primitives/oop/equalizable'

export default interface UID<UIDType, TypeToCompare>
  extends Equalizable<UID<UIDType, TypeToCompare>> {
  readonly value: UIDType
}
