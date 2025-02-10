import type { IEntityRepository } from "../../primitives";
import type { IInputSnapshot } from "./input.snapshot.interface";
import type { IPersistedInputSnapshot } from "./persisted.input.snapshot.interface";

export interface IInputRepository<UIDValueType, ProcessUIDValueType>
  extends IEntityRepository<
    UIDValueType,
    IPersistedInputSnapshot<UIDValueType, ProcessUIDValueType>,
    IInputSnapshot<UIDValueType, ProcessUIDValueType>
  > {}
