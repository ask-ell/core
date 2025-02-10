import { Observable } from "rxjs";

import type { IEntityProvider, MaybeUndefined } from "../../primitives";
import { IPersistedInputSnapshot } from "./persisted.input.snapshot.interface";

export interface IInputProvider<UIDValueType, ProcessUIDValueType>
  extends IEntityProvider<
    UIDValueType,
    IPersistedInputSnapshot<UIDValueType, ProcessUIDValueType>
  > {
  findByProcess$(
    processUID: ProcessUIDValueType
  ): Promise<
    MaybeUndefined<
      Observable<IPersistedInputSnapshot<UIDValueType, ProcessUIDValueType>>
    >
  >;
}
