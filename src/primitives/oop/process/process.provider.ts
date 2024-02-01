import EntityProvider from "../entity/entity.provider";
import PersistedProcess from "./persisted.process";
import Process from "./process";
import ProcessUID from "./process.uid";

export default interface ProcessProvider<UIDType>
  extends EntityProvider<
    Process,
    UIDType,
    ProcessUID<UIDType>,
    PersistedProcess<UIDType>
  > {}
