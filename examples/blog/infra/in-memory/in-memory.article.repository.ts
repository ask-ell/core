import { MaybeUndefined } from "@_core";

import {
  IArticleSnapshot,
  IArticleRepository,
  IPersistedArticleSnapshot,
  UIDValueType,
} from "../../domain";

import { InMemoryDatabase } from "./in-memory.database";
import { fakeWait, generateRandomUID, breakReference } from "./utils";

export class InMemoryArticleRepository implements IArticleRepository {
  constructor(private database: InMemoryDatabase) {}

  async save(
    entitySnapshot: IArticleSnapshot
  ): Promise<IPersistedArticleSnapshot> {
    await fakeWait();
    const uid: UIDValueType = generateRandomUID();
    const newArticle: IPersistedArticleSnapshot = {
      uid,
      ...entitySnapshot,
    };
    this.database.articles.set(uid, newArticle);
    return breakReference(newArticle);
  }

  async updateOne(
    persistedEntitySnapshot: IPersistedArticleSnapshot
  ): Promise<MaybeUndefined<IPersistedArticleSnapshot>> {
    await fakeWait();
    this.database.articles.set(
      persistedEntitySnapshot.uid,
      persistedEntitySnapshot
    );
    return breakReference(persistedEntitySnapshot);
  }

  removeOne(uid: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
