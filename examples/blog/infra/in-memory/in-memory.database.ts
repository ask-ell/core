import type { IPersistedArticleSnapshot, UIDValueType } from "../../domain";
import { breakReference } from "./utils";

type InMemoryDatabaseConstructor = {
  articles?: IPersistedArticleSnapshot[];
};

export class InMemoryDatabase {
  readonly articles: Map<UIDValueType, IPersistedArticleSnapshot> = new Map();

  constructor(data?: InMemoryDatabaseConstructor) {
    data?.articles?.forEach((article: IPersistedArticleSnapshot): void => {
      this.articles.set(article.uid, breakReference(article));
    });
  }
}
