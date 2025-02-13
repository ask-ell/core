import { IPersistedEntitySnapshot } from "./persisted.entity.snapshot.interface";
import { IEntitySnapshot } from "./entity.snapshot.interface";

export interface IEntityRepository<
  UIDValueType,
  _PersistedEntitySnapshot extends IPersistedEntitySnapshot<UIDValueType>,
  _EntitySnapshot extends IEntitySnapshot<
    UIDValueType,
    _PersistedEntitySnapshot
  >
> {
  save(entitySnapshot: _EntitySnapshot): Promise<_PersistedEntitySnapshot>;
  updateOne(
    persistedEntitySnapshot: _PersistedEntitySnapshot
  ): Promise<boolean>;
  removeOne(uid: UIDValueType): Promise<boolean>;
}
