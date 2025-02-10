import type { IEntityRepository } from "@_core";

import type { IArticleSnapshot } from "./article.snapshot.interface";
import type { IPersistedArticleSnapshot } from "./persisted.article.snapshot.interface";
import type { UIDValueType } from "../../../core/types";

export interface IArticleRepository
  extends IEntityRepository<
    UIDValueType,
    IPersistedArticleSnapshot,
    IArticleSnapshot
  > {}
