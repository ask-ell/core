import { IAggregateRootRepository } from "@_core/hexa";

import type { SaveArticleInput, ArticleAggregateRootState } from "./types";

export interface IArticleRepository
  extends IAggregateRootRepository<
    SaveArticleInput,
    ArticleAggregateRootState
  > {}
