import { IEntity, IEqualizable, MaybeUndefined } from "../../primitives";

import { UID } from "./types";

export interface IAggregateRoot<EntityState>
  extends IEntity<EntityState>,
    IEqualizable<IAggregateRoot<EntityState>> {
  getUID(): MaybeUndefined<UID>;
  setUID(uid: UID): void;
}
