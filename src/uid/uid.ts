import type Equalizable from "../primitives/oop/equalizable";

export default interface UID<T extends UID<T>> extends Equalizable<T> {}
