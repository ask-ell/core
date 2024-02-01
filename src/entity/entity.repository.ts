import AbstractEntity from "./entity";
import UID from "../uid/uid";

export default interface EntityRepository<
  Entity extends AbstractEntity<unknown>,
  EntityUID extends UID<EntityUID>
> {
  save(entity: Entity): Promise<EntityUID>;
  updateOne(uid: EntityUID, entity: Entity): Promise<void>;
}
