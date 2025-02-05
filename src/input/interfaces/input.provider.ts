import { Observable } from "rxjs";

import type { IEntityProvider } from "../../primitives";
import Input from "../implementations/input";
import InputUID from "../implementations/input.uid";
import PersistedInput from "../implementations/persisted.input";

export interface InputProvider<UIDType, ProcessUIDType>
  extends IEntityProvider<
    Input<ProcessUIDType>,
    UIDType,
    InputUID<UIDType, ProcessUIDType>,
    PersistedInput<UIDType, ProcessUIDType>
  > {
  findByProcess$(
    processUid: ProcessUID<ProcessUIDType>
  ): Promise<
    MaybeUndefined<Observable<PersistedInput<UIDType, ProcessUIDType>>>
  >;
}
