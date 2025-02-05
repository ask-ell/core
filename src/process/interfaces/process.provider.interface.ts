import { IEntityProvider } from "../../primitives";
import { IPersistedProcess } from "./persisted.process.interface";
import { IProcess } from "./process.interface";
import { IProcessUID } from "./process.uid.interface";

export default interface IProcessProvider<UIDType>
  extends IEntityProvider<
    IProcess,
    UIDType,
    IProcessUID<UIDType>,
    IPersistedProcess<UIDType>
  > {}
