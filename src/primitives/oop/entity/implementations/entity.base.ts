import { IEntityBase } from "../interfaces/entity.base.interface";
import { IEntitySnapshot } from "../interfaces/entity.snapshot.interface";
import { IPersistedEntitySnapshot } from "../interfaces/persisted.entity.snapshot.interface";

export class EntityBase<
  UIDValueType,
  _PersistedEntitySnapshot extends IPersistedEntitySnapshot<UIDValueType>,
  _EntitySnapshot extends IEntitySnapshot<
    UIDValueType,
    _PersistedEntitySnapshot
  >
> implements
    IEntityBase<UIDValueType, _PersistedEntitySnapshot, _EntitySnapshot>
{
  constructor(protected data: _EntitySnapshot) {}

  getSnapshot(): _EntitySnapshot {
    return { ...this.data };
  }
}
