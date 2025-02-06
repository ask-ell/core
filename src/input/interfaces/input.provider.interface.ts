import { Observable } from "rxjs";

import type { IEntityProvider, MaybeUndefined } from "../../primitives";
import { InputState } from "../input.state";
import { IInput } from "./input.interface";
import { IInputUID } from "./input.uid.interface";
import { IPersistedInput } from "./persisted.input.interface";
import { IProcessUID } from "../../process/interfaces/process.uid.interface";

export interface IInputProvider<UIDType, ProcessUIDType>
  extends IEntityProvider<
    InputState<ProcessUIDType>,
    IInput<ProcessUIDType>,
    UIDType,
    IInputUID<UIDType, ProcessUIDType>,
    IPersistedInput<UIDType, ProcessUIDType>
  > {
  findByProcess$(
    processUid: IProcessUID<ProcessUIDType>
  ): Promise<
    MaybeUndefined<Observable<IPersistedInput<UIDType, ProcessUIDType>>>
  >;
}
