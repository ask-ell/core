import { Entity } from "../../primitives";
import { InputState } from "../input.state";
import { IInput } from "../interfaces/input.interface";

export class Input<ProcessUIDType>
  extends Entity<InputState<ProcessUIDType>>
  implements IInput<ProcessUIDType> {}
