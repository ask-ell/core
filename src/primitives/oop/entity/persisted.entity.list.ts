import Entity from "./entity";
import EntityUID from "./entity.uid";
import PersistedEntity from "./persisted.entity";

export default class PersistedEntityList<
  _Entity extends Entity,
  UIDType,
  _UID extends EntityUID<UIDType, _Entity>,
  _PersistedEntity extends PersistedEntity<Entity, UIDType, _UID>
> extends Array<_PersistedEntity> {
  getEntitiesUids(): _UID[] {
    return this.map((persistedEntity) => persistedEntity.uid);
  }
}
