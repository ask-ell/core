import type { IEntitySnapshot } from "@_core";

import type { UIDValueType } from "../../../core/types";
import type { IPersistedArticleSnapshot } from "./persisted.article.snapshot.interface";

export interface IArticleSnapshot
  extends IEntitySnapshot<UIDValueType, IPersistedArticleSnapshot> {}
