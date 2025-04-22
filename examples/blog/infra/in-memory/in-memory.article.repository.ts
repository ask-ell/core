import { UID } from "@_core/ddd";

import {
  IArticleRepository,
  ArticleAggregateRootState,
  SaveArticleInput,
} from "../../application";

import { InMemoryDatabase } from "./in-memory.database";
import { fakeWait, generateRandomUID, breakReference } from "./utils";

export class InMemoryArticleRepository implements IArticleRepository {
  constructor(private database: InMemoryDatabase) {}

  async save(
    entityState: SaveArticleInput
  ): Promise<ArticleAggregateRootState> {
    await fakeWait();
    const uid: UID = generateRandomUID();
    const newArticle: ArticleAggregateRootState = {
      uid,
      ...entityState,
    };
    this.database.articles.set(uid, newArticle);
    return breakReference(newArticle);
  }

  async updateOne(
    aggregateRootState: ArticleAggregateRootState
  ): Promise<boolean> {
    await fakeWait();
    if (!this.database.articles.get(aggregateRootState.uid)) {
      return false;
    }
    this.database.articles.set(aggregateRootState.uid, aggregateRootState);
    return true;
  }

  removeOne(uid: UID): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
