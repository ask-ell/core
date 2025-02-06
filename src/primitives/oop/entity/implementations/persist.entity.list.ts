import { List } from "../../list/list";
import { IEntity } from "../interfaces/entity.interface";
import { IEntityUID } from "../interfaces/entity.uid.interface";
import { IPersistedEntity } from "../interfaces/persisted.entity.interface";

export class PersistedEntityList<
  EntityState,
  _Entity extends IEntity<EntityState>,
  UIDType,
  UID extends IEntityUID<UIDType, _Entity>,
  _PersistedEntity extends IPersistedEntity<EntityState, _Entity, UIDType, UID>
> extends List<_PersistedEntity> {
  getEntitiesUids(): UID[] {
    return this.map((persistedEntity: _PersistedEntity) => persistedEntity.uid);
  }
}
