import UID from "../../../uid";
import Entity from "./entity";

export default class EntityUID<UIDType, _Entity extends Entity>
  implements UID<UIDType, EntityUID<UIDType, _Entity>>
{
  constructor(readonly value: UIDType) {}

  isEquals(valueToCompare: UID<UIDType, EntityUID<UIDType, _Entity>>): boolean {
    return this.value === valueToCompare.value;
  }
}
