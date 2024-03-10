import Entity from "./entity";
import EntityUID from "./entity.uid";
import PersistedEntity from "./persisted.entity";

export default class PersistedEntityList<
  _Entity extends Entity,
  UIDType,
  UID extends EntityUID<UIDType, _Entity>,
  _PersistedEntity extends PersistedEntity<_Entity, UIDType, UID>
> extends Array<_PersistedEntity> {
  getEntitiesUids(): UID[] {
    return this.map((persistedEntity: _PersistedEntity) => persistedEntity.uid);
  }
}
