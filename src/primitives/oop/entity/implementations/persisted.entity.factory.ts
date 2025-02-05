import { IEntity } from "../interfaces/entity.interface";
import { IEntityUID } from "../interfaces/entity.uid.interface";
import { IPersistedEntity } from "../interfaces/persisted.entity.interface";
import { IPersistedEntityFactory } from "../interfaces/persisted.entity.factory.interface";

export abstract class PersistedEntityFactory<
  State,
  _Entity extends IEntity<State>,
  UIDType,
  _EntityUID extends IEntityUID<UIDType, _Entity>,
  _PersistedEntity extends IPersistedEntity<State, _Entity, UIDType, _EntityUID>
> implements
    IPersistedEntityFactory<
      State,
      _Entity,
      UIDType,
      _EntityUID,
      _PersistedEntity
    >
{
  abstract createFromEntity(uid: _EntityUID, entity: _Entity): _PersistedEntity;
}
