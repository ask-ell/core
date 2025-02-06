import { EntityUID } from "../../primitives";
import { InputState } from "../input.state";
import { IInput } from "../interfaces/input.interface";
import { IInputUID } from "../interfaces/input.uid.interface";

export class InputUID<UIDType, ProcessUIDType>
  extends EntityUID<UIDType, InputState<ProcessUIDType>, IInput<ProcessUIDType>>
  implements IInputUID<UIDType, ProcessUIDType> {}
