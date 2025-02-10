import type { IPersistedEntitySnapshot } from "./persisted.entity.snapshot.interface";

export type IEntitySnapshot<
  UIDValueType,
  _PersistedEntitySnapshot extends IPersistedEntitySnapshot<UIDValueType>
> = Omit<_PersistedEntitySnapshot, "uid">;
