import { IEntity } from "./interfaces/entity.interface";
import { IEntityUID } from "./interfaces/entity.uid.interface";
import { IPersistedEntity } from "./interfaces/persisted.entity.interface";

export type PersistedEntityContructor<
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
> = new (uid: _EntityUID, state: EntityState) => _PersistedEntity;
