import { AggregateRootState, UID } from "../../ddd";

export interface IAggregateRootRepository<
  EntityState,
  PersistanceResultDrivenSideAdapter extends AggregateRootState<EntityState>
> {
  save(entityState: EntityState): Promise<PersistanceResultDrivenSideAdapter>;
  updateOne(
    aggregateRootState: PersistanceResultDrivenSideAdapter
  ): Promise<boolean>;
  removeOne(uid: UID): Promise<boolean>;
}
