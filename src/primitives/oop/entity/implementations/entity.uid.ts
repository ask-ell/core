import { IEntity } from "../interfaces/entity.interface";
import { IEntityUID } from "../interfaces/entity.uid.interface";

export class EntityUID<UIDType, State, _Entity extends IEntity<State>>
  implements IEntityUID<UIDType, _Entity>
{
  constructor(readonly value: UIDType) {}

  isEquals(valueToCompare: EntityUID<UIDType, State, _Entity>): boolean {
    return this.value === valueToCompare.value;
  }
}
