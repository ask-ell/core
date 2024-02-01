import ProcessUID from "../process/process.uid";

export type InputData<ProcessUIDType> = {
  processUid: ProcessUID<ProcessUIDType>;
  value: string;
};
