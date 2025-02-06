import { PersistedEntity } from "../../primitives/oop/entity/implementations/persisted.entity";
import { IPersistedProcess } from "../interfaces/persisted.process.interface";
import { IProcess } from "../interfaces/process.interface";
import { IProcessUID } from "../interfaces/process.uid.interface";
import { ProcessState } from "../types";

export class PersistedProcess<UIDType>
  extends PersistedEntity<ProcessState, IProcess, UIDType, IProcessUID<UIDType>>
  implements IPersistedProcess<UIDType> {}
