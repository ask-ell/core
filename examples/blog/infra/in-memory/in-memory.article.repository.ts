import { wait } from "@_core";

import type {
  IArticle,
  IArticleRepository,
  IPersistedArticle,
  IArticleUID,
  IPersistedArticleFactory,
} from "../../domain";

import { InMemoryDatabase } from "./in-memory.database";
import { generateRandomArticleUID } from "./utils";

export class InMemoryArticleRepository implements IArticleRepository {
  constructor(
    private database: InMemoryDatabase,
    private persistedArticleFactory: IPersistedArticleFactory
  ) {}

  async save(entity: IArticle): Promise<IPersistedArticle> {
    await wait(0);
    const entityUID: IArticleUID = generateRandomArticleUID();
    const persistedArticle: IPersistedArticle =
      this.persistedArticleFactory.createFromEntity(entityUID, entity);
    this.database.articles.set(entityUID.value, persistedArticle);
    return persistedArticle;
  }

  updateOne(entityToUpdate: IPersistedArticle): Promise<void> {
    throw new Error("Method not implemented.");
  }

  removeOne(uid: IArticleUID): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
