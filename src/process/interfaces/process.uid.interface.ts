import { IEntityUID } from "../../primitives";
import { IProcess } from "./process.interface";

export interface IProcessUID<UIDType> extends IEntityUID<UIDType, IProcess> {}
