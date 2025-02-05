import type { I_UID } from './uid.interface'

export class UID<UIDType> implements I_UID<UIDType> {
  constructor(readonly value: UIDType) {}

  isEquals(valueToCompare: this): boolean {
    return this.value === valueToCompare.value
  }
}
