import { UID } from "@_core/ddd";

import { breakReference } from "./utils";
import { ArticleAggregateRootState } from "../../application";

type InMemoryDatabaseConstructor = {
  articles?: ArticleAggregateRootState[];
};

export class InMemoryDatabase {
  readonly articles: Map<UID, ArticleAggregateRootState> = new Map();

  constructor(data?: InMemoryDatabaseConstructor) {
    data?.articles?.forEach((article: ArticleAggregateRootState): void => {
      this.articles.set(article.uid, breakReference(article));
    });
  }
}
