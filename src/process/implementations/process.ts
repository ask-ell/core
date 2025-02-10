import { IProcess } from "../interfaces/process.interface";
import { IProcessSnapshot } from "../interfaces/process.snapshot.interface";
import { ProcessBase } from "./process.base";

export class Process<UIDValueType>
  extends ProcessBase<UIDValueType, IProcessSnapshot<UIDValueType>>
  implements IProcess<UIDValueType> {}
