import { IEntity } from "../interfaces/entity.interface";
import { IEntityUID } from "../interfaces/entity.uid.interface";
import { IPersistedEntity } from "../interfaces/persisted.entity.interface";
import { IPersistedEntityFactory } from "../interfaces/persisted.entity.factory.interface";
import { PersistedEntityContructor } from "../types";

export class PersistedEntityFactory<
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
> implements
    IPersistedEntityFactory<
      EntityState,
      _Entity,
      UIDType,
      _EntityUID,
      _PersistedEntity
    >
{
  constructor(
    private entityContructor: PersistedEntityContructor<
      EntityState,
      _Entity,
      UIDType,
      _EntityUID,
      _PersistedEntity
    >
  ) {}

  createFromEntity(uid: _EntityUID, entity: _Entity): _PersistedEntity {
    return new this.entityContructor(uid, entity.getSnapshot());
  }
}
