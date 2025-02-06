import { IEntity } from "../interfaces/entity.interface";
import { IEntityUID } from "../interfaces/entity.uid.interface";
import { IPersistedEntity } from "../interfaces/persisted.entity.interface";

export class PersistedEntity<
  EntityState,
  _Entity extends IEntity<EntityState>,
  UIDType,
  _EntityUID extends IEntityUID<UIDType, _Entity>
> implements IPersistedEntity<EntityState, _Entity, UIDType, _EntityUID>
{
  constructor(readonly uid: _EntityUID, private data: EntityState) {}

  isEquals(
    valueToCompare: IPersistedEntity<EntityState, _Entity, UIDType, _EntityUID>
  ): boolean {
    return this.uid.isEquals(valueToCompare.uid);
  }

  getSnapshot(): EntityState {
    return this.data;
  }
}
