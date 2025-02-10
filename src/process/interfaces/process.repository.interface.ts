import { IEntityRepository } from "../../primitives";
import { IPersistedProcessSnapshot } from "./persisted.process.snapshot.interface";
import { IProcessSnapshot } from "./process.snapshot.interface";

export interface IProcessRepository<UIDValueType>
  extends IEntityRepository<
    UIDValueType,
    IPersistedProcessSnapshot<UIDValueType>,
    IProcessSnapshot<UIDValueType>
  > {}
