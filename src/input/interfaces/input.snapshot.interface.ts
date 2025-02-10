import type { IEntitySnapshot } from "../../primitives";
import type { IPersistedInputSnapshot } from "./persisted.input.snapshot.interface";

export interface IInputSnapshot<UIDValueType, ProcessUIDValueType>
  extends IEntitySnapshot<
    UIDValueType,
    IPersistedInputSnapshot<UIDValueType, ProcessUIDValueType>
  > {}
