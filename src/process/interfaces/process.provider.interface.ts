import { IEntityProvider } from "../../primitives";
import { IPersistedProcessSnapshot } from "./persisted.process.snapshot.interface";

export interface IProcessProvider<UIDValueType>
  extends IEntityProvider<
    UIDValueType,
    IPersistedProcessSnapshot<UIDValueType>
  > {}
