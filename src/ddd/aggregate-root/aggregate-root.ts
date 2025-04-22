import { Entity, MaybeUndefined } from "../../primitives";

import { IAggregateRoot } from "./aggregate-root.interface";
import { UID } from "./types";

export abstract class AggregateRoot<EntityState>
  extends Entity<EntityState>
  implements IAggregateRoot<EntityState>
{
  private uid: MaybeUndefined<UID>;

  getUID(): MaybeUndefined<UID> {
    return this.uid;
  }

  setUID(uid: UID): void {
    this.uid = uid;
  }

  isEquals(valueToCompare: IAggregateRoot<EntityState>): boolean {
    return this.uid === valueToCompare.getUID();
  }
}
