import { MaybeUndefined } from "@_core";
import { UID } from "@_core/ddd";

import type { IArticleState } from "../../domain";
import { ArticleAggregateRootState } from "../driven/types";

export type CreateArticleUseCaseInput = IArticleState;
export type CreateArticleUseCaseOutput = ArticleAggregateRootState;

export type UpdateArticleUseCaseInput = IArticleState & {
  uid: UID;
};
export type UpdateArticleUseCaseOutput =
  MaybeUndefined<ArticleAggregateRootState>;
