import { MaybeUndefined } from "../types";
import AbstractEntity from "./entity";
import UID from "../uid";

export default interface EntityProvider<
  Entity extends AbstractEntity,
  EntityUID extends UID<EntityUID>
> {
  findAll(): Promise<Entity[]>;
  findOneByUid(uid: EntityUID): Promise<MaybeUndefined<Entity>>;
}
