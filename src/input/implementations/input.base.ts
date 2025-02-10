import { EntityBase } from "../../primitives";
import { IInputBase } from "../interfaces/input.base.interface";
import { IInputSnapshot } from "../interfaces/input.snapshot.interface";
import { IPersistedInputSnapshot } from "../interfaces/persisted.input.snapshot.interface";

export class InputBase<
    UIDValueType,
    ProcessUIDValueType,
    _InputSnapshot extends IInputSnapshot<UIDValueType, ProcessUIDValueType>
  >
  extends EntityBase<
    UIDValueType,
    IPersistedInputSnapshot<UIDValueType, ProcessUIDValueType>,
    _InputSnapshot
  >
  implements IInputBase<UIDValueType, ProcessUIDValueType, _InputSnapshot> {}
