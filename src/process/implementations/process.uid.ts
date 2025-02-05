import { EntityUID } from "../../primitives";
import { IProcessUID } from "../interfaces/process.uid.interface";
import { ProcessState } from "../types";
import { Process } from "./process";

export class ProcessUID<UIDType>
  extends EntityUID<UIDType, ProcessState, Process>
  implements IProcessUID<UIDType> {}
