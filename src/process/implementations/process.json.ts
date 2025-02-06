import { Json } from "../../resources";
import { IPersistedProcess } from "../interfaces/persisted.process.interface";
import { ProcessJsonData } from "../types";

export class ProcessJson<UIDType> extends Json<ProcessJsonData> {
  constructor(process: IPersistedProcess<UIDType>) {
    super({
      stdout: process.getSnapshot().stdout,
      result: process.getSnapshot().result,
    });
  }
}
