export interface IEntity<EntityState> {
  getSnapshot(): EntityState;
}
