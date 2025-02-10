import { IEntityBase } from "../../primitives";
import { IPersistedProcessSnapshot } from "./persisted.process.snapshot.interface";
import { IProcessSnapshot } from "./process.snapshot.interface";

export interface IProcessBase<
  UIDValueType,
  _ProcessSnapshot extends IProcessSnapshot<UIDValueType>
> extends IEntityBase<
    UIDValueType,
    IPersistedProcessSnapshot<UIDValueType>,
    _ProcessSnapshot
  > {}
