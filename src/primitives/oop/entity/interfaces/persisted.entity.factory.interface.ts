import { IEntity } from "./entity.interface";
import { IEntityUID } from "./entity.uid.interface";
import { IPersistedEntity } from "./persisted.entity.interface";

export interface IPersistedEntityFactory<
  EntityState,
  _Entity extends IEntity<EntityState>,
  UIDType,
  _EntityUID extends IEntityUID<UIDType, _Entity>,
  _PersistedEntity extends IPersistedEntity<
    EntityState,
    _Entity,
    UIDType,
    _EntityUID
  >
> {
  createFromEntity(uid: _EntityUID, entity: _Entity): _PersistedEntity;
}
