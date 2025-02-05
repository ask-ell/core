import { IPersistedEntity } from "@_core";

import { ProcessState } from "../types";
import { IProcess } from "./process.interface";
import { IProcessUID } from "./process.uid.interface";

export interface IPersistedProcess<UIDType>
  extends IPersistedEntity<
    ProcessState,
    IProcess,
    UIDType,
    IProcessUID<UIDType>
  > {}
