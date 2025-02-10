import { IEntity } from "../../primitives";
import { IInputSnapshot } from "./input.snapshot.interface";
import { IPersistedInputSnapshot } from "./persisted.input.snapshot.interface";

export interface IInput<UIDValueType, ProcessUIDValueType>
  extends IEntity<
    UIDValueType,
    IPersistedInputSnapshot<UIDValueType, ProcessUIDValueType>,
    IInputSnapshot<UIDValueType, ProcessUIDValueType>
  > {}
