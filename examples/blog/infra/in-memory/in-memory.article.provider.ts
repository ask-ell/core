import { Observable } from "rxjs";
import { MaybeUndefined } from "@_core";
import { UID } from "@_core/ddd";

import { ArticleAggregateRootState, IArticleProvider } from "../../application";

import { InMemoryDatabase } from "./in-memory.database";
import { breakReference, fakeWait } from "./utils";

export class InMemoryArticleProvider implements IArticleProvider {
  constructor(private database: InMemoryDatabase) {}

  findAll(): Promise<ArticleAggregateRootState[]> {
    throw new Error("Method not implemented.");
  }

  async findOneByUID(
    uid: UID
  ): Promise<MaybeUndefined<ArticleAggregateRootState>> {
    await fakeWait();
    const findedArticle: MaybeUndefined<ArticleAggregateRootState> =
      this.database.articles.get(uid);
    if (!findedArticle) {
      return undefined;
    }
    return breakReference(findedArticle);
  }

  lastSavedEntity$(): Observable<ArticleAggregateRootState> {
    throw new Error("Method not implemented.");
  }
}
