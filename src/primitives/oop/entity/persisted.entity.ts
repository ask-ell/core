import Equalizable from "../equalizable";
import Entity from "./entity";
import EntityUID from "./entity.uid";

export default interface PersistedEntity<
  _Entity extends Entity,
  UIDType,
  _EntityUID extends EntityUID<UIDType, _Entity>
> extends Equalizable<PersistedEntity<_Entity, UIDType, _EntityUID>> {
  readonly uid: _EntityUID;
}
