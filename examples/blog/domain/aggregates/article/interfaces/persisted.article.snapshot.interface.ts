import type { IPersistedEntitySnapshot } from "@_core";

import type { UIDValueType } from "../../../core/types";

export interface IPersistedArticleSnapshot
  extends IPersistedEntitySnapshot<UIDValueType> {
  title: string;
  description: string;
}
