import type { IEntitySnapshot } from "../../primitives";
import type { IPersistedProcessSnapshot } from "./persisted.process.snapshot.interface";

export interface IProcessSnapshot<UIDValueType>
  extends IEntitySnapshot<
    UIDValueType,
    IPersistedProcessSnapshot<UIDValueType>
  > {}
