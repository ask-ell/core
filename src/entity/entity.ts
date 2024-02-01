import Equalizable from "../primitives/oop/equalizable";

export default abstract class Entity<State = unknown>
  implements Equalizable<Entity<State>>
{
  constructor(protected state: State) {}

  abstract isEquals(entityToCompare: Entity<State>): boolean;

  protected update(updateFn: (oldState: State) => Partial<State>): void {
    this.state = {
      ...this.state,
      ...updateFn(this.state),
    };
  }
}
