import { Observable } from "rxjs";

import { AggregateRootState, UID } from "../../ddd";
import { MaybeUndefined } from "../../primitives";

export interface IAggregateRootProvider<
  EntityState,
  ProvidingResultDrivenSideAdapter extends AggregateRootState<EntityState>
> {
  findAll(): Promise<ProvidingResultDrivenSideAdapter[]>;
  findOneByUID(
    uid: UID
  ): Promise<MaybeUndefined<ProvidingResultDrivenSideAdapter>>;
  lastSavedEntity$(): Observable<ProvidingResultDrivenSideAdapter>;
}
