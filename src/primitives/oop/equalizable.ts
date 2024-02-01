export default interface Equalizable<TypeToCompare> {
  isEquals: (valueToCompare: TypeToCompare) => boolean;
}
