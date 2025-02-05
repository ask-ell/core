import { IEqualizable } from "../../equalizable";
import { IEntity } from "./entity.interface";
import { IEntityUID } from "./entity.uid.interface";

export interface IPersistedEntity<
  State,
  _Entity extends IEntity<State>,
  UIDType,
  _EntityUID extends IEntityUID<UIDType, _Entity>
> extends IEqualizable,
    IEntity<State> {
  readonly uid: _EntityUID;
}
