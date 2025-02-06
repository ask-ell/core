import { IEntityRepository } from "../../primitives";
import { InputState } from "../input.state";
import { IInput } from "./input.interface";
import { IInputUID } from "./input.uid.interface";
import { IPersistedInput } from "./persisted.input.interface";

export interface IInputRepository<UIDType, ProcessUIDType>
  extends IEntityRepository<
    InputState<ProcessUIDType>,
    IInput<ProcessUIDType>,
    UIDType,
    IInputUID<UIDType, ProcessUIDType>,
    IPersistedInput<UIDType, ProcessUIDType>
  > {}
