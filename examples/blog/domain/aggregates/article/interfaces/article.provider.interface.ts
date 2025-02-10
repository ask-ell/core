import type { IEntityProvider } from "@_core";

import type { IPersistedArticleSnapshot } from "./persisted.article.snapshot.interface";
import { UIDValueType } from "../../../core/types";

export interface IArticleProvider
  extends IEntityProvider<UIDValueType, IPersistedArticleSnapshot> {}
