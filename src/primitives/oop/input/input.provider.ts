import { Observable } from "rxjs";
import Input from "./input";
import InputUID from "./input.uid";
import PersistedInput from "./persisted.input";
import EntityProvider from "../entity/entity.provider";
import ProcessUID from "../process/process.uid";
import { MaybeUndefined } from "../../fp/maybe";

export default interface InputProvider<UIDType, ProcessUIDType>
  extends EntityProvider<
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
