import { IEntitySnapshot } from "./entity.snapshot.interface";
import { IPersistedEntitySnapshot } from "./persisted.entity.snapshot.interface";
import { ISnapshotable } from "../../snapshotable.interface";

export interface IEntity<
  UIDValueType,
  _PersistedEntitySnapshot extends IPersistedEntitySnapshot<UIDValueType>,
  _EntitySnapshot extends IEntitySnapshot<
    UIDValueType,
    _PersistedEntitySnapshot
  >
> extends ISnapshotable<_EntitySnapshot> {}
