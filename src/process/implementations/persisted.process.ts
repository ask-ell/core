import { IPersistedProcess } from "../interfaces/persisted.process.interface";
import { IPersistedProcessSnapshot } from "../interfaces/persisted.process.snapshot.interface";
import { ProcessBase } from "./process.base";

export class PersistedProcess<UIDValueType>
  extends ProcessBase<UIDValueType, IPersistedProcessSnapshot<UIDValueType>>
  implements IPersistedProcess<UIDValueType>
{
  isEquals(valueToCompare: IPersistedProcess<UIDValueType>): boolean {
    return this.data.uid === valueToCompare.getSnapshot().uid;
  }
}
