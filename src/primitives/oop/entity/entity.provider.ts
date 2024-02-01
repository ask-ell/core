import { Observable } from "rxjs";

import { MaybeUndefined } from "../../fp/maybe";
import Entity from "./entity";
import EntityUID from "./entity.uid";
import PersistedEntity from "./persisted.entity";

export default interface EntityProvider<
  _Entity extends Entity,
  UIDType,
  _EntityUID extends EntityUID<UIDType, _Entity>,
  _PersistedEntity extends PersistedEntity<_Entity, UIDType, _EntityUID>
> {
  findAll(): Promise<_PersistedEntity[]>;
  findOneByUid(uid: _EntityUID): Promise<MaybeUndefined<_PersistedEntity>>;
  lastSavedEntity$(): Observable<_PersistedEntity>;
}
