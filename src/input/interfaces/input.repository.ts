import EntityRepository from "../entity/entity.repository.interface";
import Input from "./input";
import InputUID from "./input.uid";
import PersistedInput from "./persisted.input";

export default interface InputRepository<UIDType, ProcessUIDType>
  extends EntityRepository<
    Input<ProcessUIDType>,
    UIDType,
    InputUID<UIDType, ProcessUIDType>,
    PersistedInput<UIDType, ProcessUIDType>
  > {}
