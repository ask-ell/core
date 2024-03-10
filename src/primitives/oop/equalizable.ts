export default interface Equalizable {
  isEquals: (valueToCompare: this) => boolean;
}
