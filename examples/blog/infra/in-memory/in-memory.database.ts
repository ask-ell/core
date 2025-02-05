import type { UIDType, IPersistedArticle } from "../../domain";

type InMemoryDatabaseConstructor = {
  articles?: IPersistedArticle[];
};

export class InMemoryDatabase {
  readonly articles: Map<UIDType, IPersistedArticle> = new Map();

  constructor(data?: InMemoryDatabaseConstructor) {
    data?.articles?.forEach((article: IPersistedArticle): void => {
      this.articles.set(article.uid.value, article);
    });
  }
}
