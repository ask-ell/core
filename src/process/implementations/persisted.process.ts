import { IPersistedProcess } from "../interfaces/persisted.process.interface";
import { IProcessUID } from "../interfaces/process.uid.interface";
import { ProcessState } from "../types";
import { Process } from "./process";

export class PersistedProcess<UIDType>
  extends Process
  implements IPersistedProcess<UIDType>
{
  constructor(readonly uid: IProcessUID<UIDType>, data: ProcessState) {
    super(data);
  }

  isEquals(valueToCompare: this): boolean {
    return this.uid.isEquals(valueToCompare.uid);
  }
}
