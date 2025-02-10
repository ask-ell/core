import { IPersistedInput } from "../interfaces/persisted.input.interface";
import { IPersistedInputSnapshot } from "../interfaces/persisted.input.snapshot.interface";
import { InputBase } from "./input.base";

export class PersistedInput<UIDValueType, ProcessUIDValueType>
  extends InputBase<
    UIDValueType,
    ProcessUIDValueType,
    IPersistedInputSnapshot<UIDValueType, ProcessUIDValueType>
  >
  implements IPersistedInput<UIDValueType, ProcessUIDValueType>
{
  isEquals(
    valueToCompare: IPersistedInput<UIDValueType, ProcessUIDValueType>
  ): boolean {
    return this.data.uid === valueToCompare.getSnapshot().uid;
  }
}
