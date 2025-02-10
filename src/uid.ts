import type { I_UID } from './uid.interface'

export class UID<ValueType> implements I_UID<ValueType> {
  constructor(readonly value: ValueType) {}

  isEquals(valueToCompare: I_UID<ValueType>): boolean {
    return this.value === valueToCompare.value
  }
}
