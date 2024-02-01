import Entity from "./entity";
import EntityUID from "./entity.uid";
import PersistedEntity from "./persisted.entity";

export default interface EntityRepository<
  _Entity extends Entity,
  UIDType,
  _EntityUID extends EntityUID<UIDType, _Entity>,
  _PersistedEntity extends PersistedEntity<_Entity, UIDType, _EntityUID>
> {
  save(entity: _Entity): Promise<_EntityUID>;
  updateOne(entityToUpdate: _PersistedEntity): Promise<void>;
  removeOne(uid: _EntityUID): Promise<void>;
}
