import EntityUID from "../entity/implementations/entity.uid";
import Input from "./input";

export default class InputUID<UIDType, ProcessUIDType> extends EntityUID<
  UIDType,
  Input<ProcessUIDType>
> {}
