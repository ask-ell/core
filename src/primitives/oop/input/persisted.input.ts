import PersistedEntity from "../entity/persisted.entity";
import Input from "./input";
import InputUID from "./input.uid";
import { InputData } from "./types";

export default class PersistedInput<UIDType, ProcessUIDType>
  extends Input<ProcessUIDType>
  implements
    PersistedEntity<
      Input<ProcessUIDType>,
      UIDType,
      InputUID<UIDType, ProcessUIDType>
    >
{
  constructor(
    readonly uid: InputUID<UIDType, ProcessUIDType>,
    data: InputData<ProcessUIDType>
  ) {
    super(data);
  }

  getUid(): InputUID<UIDType, ProcessUIDType> {
    return this.uid;
  }

  isEquals(
    valueToCompare: PersistedEntity<
      Input<ProcessUIDType>,
      UIDType,
      InputUID<UIDType, ProcessUIDType>
    >
  ): boolean {
    return this.uid.isEquals(valueToCompare.uid);
  }
}
