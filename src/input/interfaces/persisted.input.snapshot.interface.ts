import { IPersistedEntitySnapshot } from "../../primitives";

export interface IPersistedInputSnapshot<UIDValueType, ProcessUIDValueType>
  extends IPersistedEntitySnapshot<UIDValueType> {
  processUID: ProcessUIDValueType;
  value: string;
}
