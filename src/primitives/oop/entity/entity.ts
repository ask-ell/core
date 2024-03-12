export default class Entity<State = unknown> {
  constructor(protected state: State) {}

  protected update(updateFn: (oldState: State) => Partial<State>): void {
    this.state = {
      ...this.state,
      ...updateFn(this.state),
    };
  }

  getSnapshot(): State {
    return this.state;
  }
}
