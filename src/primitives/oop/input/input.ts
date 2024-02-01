import Entity from "../entity/entity";
import { InputData } from "./types";

export default class Input<ProcessUIDType> extends Entity<
  InputData<ProcessUIDType>
> {}
