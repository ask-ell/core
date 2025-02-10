import { MaybeUndefined } from "../../../fp/maybe";
import { IPersistedEntitySnapshot } from "./persisted.entity.snapshot.interface";

export interface IEntityProvider<
  UIDValueType,
  _PersistedEntitySnapshot extends IPersistedEntitySnapshot<UIDValueType>
> {
  findOne(uid: UIDValueType): Promise<MaybeUndefined<_PersistedEntitySnapshot>>;
}
