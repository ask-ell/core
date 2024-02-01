import Process from "./process";
import ProcessUID from "./process.uid";
import PersistedProcess from "./persisted.process";
import EntityRepository from "../entity/entity.repository";

export default interface ProcessRepository<UIDType>
  extends EntityRepository<
    Process,
    UIDType,
    ProcessUID<UIDType>,
    PersistedProcess<UIDType>
  > {}
