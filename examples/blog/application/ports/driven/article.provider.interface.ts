import { IAggregateRootProvider } from "@_core/hexa";

import { IArticleState } from "../../domain";
import { ArticleAggregateRootState } from "./types";

export interface IArticleProvider
  extends IAggregateRootProvider<IArticleState, ArticleAggregateRootState> {}
