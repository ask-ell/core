export interface IEqualizable {
  isEquals: (valueToCompare: this) => boolean;
}
