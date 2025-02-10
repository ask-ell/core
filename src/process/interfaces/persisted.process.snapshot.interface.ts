import { IPersistedEntitySnapshot } from "../../primitives";
import { Executable } from "../implementations/executable";
import { ProcessLog } from "../types";

export interface IPersistedProcessSnapshot<UIDValueType>
  extends IPersistedEntitySnapshot<UIDValueType> {
  executable: Executable;
  stdout: ProcessLog[];
  result?: number;
}
