import type Equalizable from './primitives/oop/equalizable'

export default interface UID<UIDType> extends Equalizable {
  readonly value: UIDType
}
