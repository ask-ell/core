import type { IPersistedEntity } from "../../primitives";
import type { IInputBase } from "./input.base.interface";
import type { IPersistedInputSnapshot } from "./persisted.input.snapshot.interface";

export interface IPersistedInput<UIDValueType, ProcessUIDValueType>
  extends IPersistedEntity<
      UIDValueType,
      IPersistedInputSnapshot<UIDValueType, ProcessUIDValueType>,
      IPersistedInput<UIDValueType, ProcessUIDValueType>
    >,
    IInputBase<
      UIDValueType,
      ProcessUIDValueType,
      IPersistedInputSnapshot<UIDValueType, ProcessUIDValueType>
    > {}
