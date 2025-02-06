import { IEqualizable } from "../../equalizable";
import { IEntity } from "./entity.interface";
import { IEntityUID } from "./entity.uid.interface";

export interface IPersistedEntity<
  EntityState,
  _Entity extends IEntity<EntityState>,
  UIDType,
  _EntityUID extends IEntityUID<UIDType, _Entity>
> extends IEqualizable,
    IEntity<EntityState> {
  readonly uid: _EntityUID;
}
