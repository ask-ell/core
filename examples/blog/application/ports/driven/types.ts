import { AggregateRootState } from "@_core/ddd";

import { IArticleState } from "../../../domain";

export type SaveArticleInput = IArticleState;
export type ArticleAggregateRootState = AggregateRootState<IArticleState>;
