export default interface Equalizable<T> {
  isEquals: (valueToCompare: T) => boolean;
}
