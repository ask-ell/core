import { IEntity } from "../interfaces/entity.interface";
import { IEntityUID } from "../interfaces/entity.uid.interface";

export class EntityUID<
  UIDType,
  EntityState,
  _Entity extends IEntity<EntityState>
> implements IEntityUID<UIDType, _Entity>
{
  constructor(readonly value: UIDType) {}

  isEquals(valueToCompare: EntityUID<UIDType, EntityState, _Entity>): boolean {
    return this.value === valueToCompare.value;
  }
}
