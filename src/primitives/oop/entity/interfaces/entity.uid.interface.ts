import type { I_UID } from "../../../../uid.interface";

export interface IEntityUID<UIDType, Entity> extends I_UID<UIDType> {
  isEquals: (valueToCompare: IEntityUID<UIDType, Entity>) => boolean;
}
