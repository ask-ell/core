import { IEntity } from "../interfaces/entity.interface";

export class Entity<State> implements IEntity<State> {
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
