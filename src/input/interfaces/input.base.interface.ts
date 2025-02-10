import { IEntityBase } from "../../primitives/oop/entity/interfaces/entity.base.interface";
import { IInputSnapshot } from "./input.snapshot.interface";
import { IPersistedInputSnapshot } from "./persisted.input.snapshot.interface";

export interface IInputBase<
  UIDValueType,
  ProcessUIDValueType,
  _InputSnapshot extends IInputSnapshot<UIDValueType, ProcessUIDValueType>
> extends IEntityBase<
    UIDValueType,
    IPersistedInputSnapshot<UIDValueType, ProcessUIDValueType>,
    _InputSnapshot
  > {}
