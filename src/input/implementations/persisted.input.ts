import { PersistedEntity } from "../../primitives/oop/entity/implementations/persisted.entity";
import { InputState } from "../input.state";
import { IInput } from "../interfaces/input.interface";
import { IInputUID } from "../interfaces/input.uid.interface";
import { IPersistedInput } from "../interfaces/persisted.input.interface";

export class PersistedInput<UIDType, ProcessUIDType>
  extends PersistedEntity<
    InputState<ProcessUIDType>,
    IInput<ProcessUIDType>,
    UIDType,
    IInputUID<UIDType, ProcessUIDType>
  >
  implements IPersistedInput<UIDType, ProcessUIDType> {}
