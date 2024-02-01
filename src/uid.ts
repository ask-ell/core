import type Equalizable from './primitives/oop/equalizable'

export default interface UID<T> extends Equalizable<UID<T>> {}
