import EntityUID from "../entity/entity.uid";
import Input from "./input";

export default class InputUID<UIDType, ProcessUIDType> extends EntityUID<
  UIDType,
  Input<ProcessUIDType>
> {}
