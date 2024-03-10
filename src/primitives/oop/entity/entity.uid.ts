import UID from "../../../uid";
import Entity from "./entity";

export default class EntityUID<UIDType, _Entity extends Entity>
  implements UID<UIDType>
{
  constructor(readonly value: UIDType) {}

  isEquals(valueToCompare: EntityUID<UIDType, _Entity>): boolean {
    return this.value === valueToCompare.value;
  }
}
