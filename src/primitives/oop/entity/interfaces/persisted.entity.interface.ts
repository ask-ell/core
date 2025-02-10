import { IEqualizable } from "../../equalizable";
import { IPersistedEntitySnapshot } from "./persisted.entity.snapshot.interface";
import { ISnapshotable } from "../../snapshotable.interface";

export interface IPersistedEntity<
  UIDValueType,
  _PersistedEntitySnapshot extends IPersistedEntitySnapshot<UIDValueType>,
  EqualizableType
> extends ISnapshotable<_PersistedEntitySnapshot>,
    IEqualizable<EqualizableType> {}
