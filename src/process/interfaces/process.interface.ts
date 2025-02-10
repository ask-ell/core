import { IEntity } from "../../primitives";
import { IPersistedProcessSnapshot } from "./persisted.process.snapshot.interface";
import { IProcessSnapshot } from "./process.snapshot.interface";

export interface IProcess<UIDValueType>
  extends IEntity<
    UIDValueType,
    IPersistedProcessSnapshot<UIDValueType>,
    IProcessSnapshot<UIDValueType>
  > {}
