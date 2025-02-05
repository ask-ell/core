import { Observable } from "rxjs";

import { MaybeUndefined } from "../../../fp/maybe";
import { IEntity } from "./entity.interface";
import { IEntityUID } from "./entity.uid.interface";
import { IPersistedEntity } from "./persisted.entity.interface";

export interface IEntityProvider<
  _Entity extends IEntity,
  UIDType,
  _EntityUID extends IEntityUID<UIDType, _Entity>,
  _PersistedEntity extends IPersistedEntity<_Entity, UIDType, _EntityUID>
> {
  findAll(): Promise<_PersistedEntity[]>;
  findOneByUid(uid: _EntityUID): Promise<MaybeUndefined<_PersistedEntity>>;
  lastSavedEntity$(): Observable<_PersistedEntity>;
}
