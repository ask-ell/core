import { IPersistedEntity } from "../../primitives";
import { InputState } from "../input.state";
import { IInput } from "./input.interface";
import { IInputUID } from "./input.uid.interface";

export interface IPersistedInput<UIDType, ProcessUIDType>
  extends IPersistedEntity<
    InputState<ProcessUIDType>,
    IInput<ProcessUIDType>,
    UIDType,
    IInputUID<UIDType, ProcessUIDType>
  > {}
