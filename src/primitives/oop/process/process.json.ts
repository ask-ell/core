import Json from "../../../resources/json";
import PersistedProcess from "./persisted.process";
import { ProcessJsonData } from "./types";

export default class ProcessJson<UIDType> extends Json<ProcessJsonData> {
  constructor(process: PersistedProcess<UIDType>) {
    super({
      stdout: process.getSnapshot().stdout,
      result: process.getSnapshot().result,
    });
  }
}
