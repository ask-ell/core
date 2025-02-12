import { Observable } from "rxjs";

import { MaybeUndefined } from "../../../fp/maybe";
import { IPersistedEntitySnapshot } from "./persisted.entity.snapshot.interface";

export interface IEntityProvider<
  UIDValueType,
  _PersistedEntitySnapshot extends IPersistedEntitySnapshot<UIDValueType>
> {
  findAll(): Promise<_PersistedEntitySnapshot[]>;
  findOneByUID(
    uid: UIDValueType
  ): Promise<MaybeUndefined<_PersistedEntitySnapshot>>;
  lastSavedEntity$(): Observable<_PersistedEntitySnapshot>;
}
