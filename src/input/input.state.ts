import ProcessUID from "../process/implementations/process.uid";

export type InputData<ProcessUIDType> = {
  processUid: ProcessUID<ProcessUIDType>;
  value: string;
};
