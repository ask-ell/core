import type { IPersistedEntity } from "../../primitives";
import type { IPersistedProcessSnapshot } from "./persisted.process.snapshot.interface";

export interface IPersistedProcess<UIDValueType>
  extends IPersistedEntity<
    UIDValueType,
    IPersistedProcessSnapshot<UIDValueType>,
    IPersistedProcess<UIDValueType>
  > {}
