import type { IInput } from "../interfaces/input.interface";
import { IInputSnapshot } from "../interfaces/input.snapshot.interface";
import { InputBase } from "./input.base";

export class Input<UIDValueType, ProcessUIDValueType>
  extends InputBase<
    UIDValueType,
    ProcessUIDValueType,
    IInputSnapshot<UIDValueType, ProcessUIDValueType>
  >
  implements IInput<UIDValueType, ProcessUIDValueType> {}
