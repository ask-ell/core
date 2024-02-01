import PersistedEntity from "../entity/persisted.entity";
import Process from "./process";
import ProcessUID from "./process.uid";
import { ProcessData } from "./types";

export default class PersistedProcess<UIDType>
  extends Process
  implements PersistedEntity<Process, UIDType, ProcessUID<UIDType>>
{
  constructor(readonly uid: ProcessUID<UIDType>, data: ProcessData) {
    super(data);
  }

  /**
   * @deprecated
   */
  static fromStateData<UIDType>(
    uid: ProcessUID<UIDType>,
    state: ProcessData
  ): PersistedProcess<UIDType> {
    const persistedProcess = new PersistedProcess(uid, state);
    persistedProcess.state = state;
    return persistedProcess;
  }

  getUid(): ProcessUID<UIDType> {
    return this.uid;
  }

  isEquals(
    entityToCompare: PersistedEntity<Process, UIDType, ProcessUID<UIDType>>
  ): boolean {
    return entityToCompare.uid.isEquals(this.uid);
  }
}
