import { IEntityUID } from "../../primitives";
import { IInput } from "./input.interface";

export interface IInputUID<UIDType, ProcessUIDType>
  extends IEntityUID<UIDType, IInput<ProcessUIDType>> {}
