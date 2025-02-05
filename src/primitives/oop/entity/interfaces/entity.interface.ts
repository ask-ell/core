export interface IEntity<State> {
  getSnapshot(): State;
}
