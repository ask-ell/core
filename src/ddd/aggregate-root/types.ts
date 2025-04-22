export type UID = string;

export type AggregateRootState<EntityState> = EntityState & {
  uid: UID;
};
