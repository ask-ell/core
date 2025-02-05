import { IEntity } from "./entity.interface";
import { IEntityUID } from "./entity.uid.interface";
import { IPersistedEntity } from "./persisted.entity.interface";

export interface IEntityRepository<
  State,
  _Entity extends IEntity<State>,
  UIDType,
  _EntityUID extends IEntityUID<UIDType, _Entity>,
  _PersistedEntity extends IPersistedEntity<State, _Entity, UIDType, _EntityUID>
> {
  save(entity: _Entity): Promise<_PersistedEntity>;
  updateOne(entityToUpdate: _PersistedEntity): Promise<void>;
  removeOne(uid: _EntityUID): Promise<boolean>;
}
