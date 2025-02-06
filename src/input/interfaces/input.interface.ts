import { IEntity } from "../../primitives";
import { InputState } from "../input.state";

export interface IInput<ProcessUIDType>
  extends IEntity<InputState<ProcessUIDType>> {}
