import { IEntityRepository } from "../../primitives";
import { ProcessState } from "../types";
import { IPersistedProcess } from "./persisted.process.interface";
import { IProcess } from "./process.interface";
import { IProcessUID } from "./process.uid.interface";

export default interface IProcessRepository<UIDType>
  extends IEntityRepository<
    ProcessState,
    IProcess,
    UIDType,
    IProcessUID<UIDType>,
    IPersistedProcess<UIDType>
  > {}
