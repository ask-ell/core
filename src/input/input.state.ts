import { IProcessUID } from "../process/interfaces/process.uid.interface";

export type InputState<ProcessUIDType> = {
  processUid: IProcessUID<ProcessUIDType>;
  value: string;
};
