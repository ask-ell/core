import { Json } from "../../resources";
import { IPersistedProcess } from "../interfaces/persisted.process.interface";
import { ProcessLog } from "../types";

type ProcessJSONData = {
  result?: number;
  stdout: ProcessLog[];
};

export class ProcessJson<UIDType> extends Json<ProcessJSONData> {
  constructor(process: IPersistedProcess<UIDType>) {
    super({
      stdout: process.getSnapshot().stdout,
      result: process.getSnapshot().result,
    });
  }
}
