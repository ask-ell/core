import { ISnapshotable } from "../../snapshotable.interface";
import { IEntitySnapshot } from "../interfaces/entity.snapshot.interface";
import { IPersistedEntitySnapshot } from "../interfaces/persisted.entity.snapshot.interface";

export interface IEntityBase<
  UIDValueType,
  _PersistedEntitySnapshot extends IPersistedEntitySnapshot<UIDValueType>,
  _EntitySnapshot extends IEntitySnapshot<
    UIDValueType,
    _PersistedEntitySnapshot
  >
> extends ISnapshotable<_EntitySnapshot> {}
