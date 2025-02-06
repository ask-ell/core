import { IEntityProvider } from "../../primitives";
import { ProcessState } from "../types";
import { IPersistedProcess } from "./persisted.process.interface";
import { IProcess } from "./process.interface";
import { IProcessUID } from "./process.uid.interface";

export interface IProcessProvider<UIDType>
  extends IEntityProvider<
    ProcessState,
    IProcess,
    UIDType,
    IProcessUID<UIDType>,
    IPersistedProcess<UIDType>
  > {}
