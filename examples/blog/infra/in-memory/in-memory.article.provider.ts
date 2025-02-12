import { MaybeUndefined } from "@_core";
import { Observable } from "rxjs";

import {
  IArticleProvider,
  IPersistedArticleSnapshot,
  UIDValueType,
} from "../../domain";
import { InMemoryDatabase } from "./in-memory.database";
import { fakeWait, breakReference } from "./utils";

export class InMemoryArticleProvider implements IArticleProvider {
  constructor(private database: InMemoryDatabase) {}
  findAll(): Promise<IPersistedArticleSnapshot[]> {
    throw new Error("Method not implemented.");
  }

  async findOneByUID(
    uid: UIDValueType
  ): Promise<MaybeUndefined<IPersistedArticleSnapshot>> {
    await fakeWait();
    const findedArticle: MaybeUndefined<IPersistedArticleSnapshot> =
      this.database.articles.get(uid);
    if (!findedArticle) {
      return undefined;
    }
    return breakReference(findedArticle);
  }

  lastSavedEntity$(): Observable<IPersistedArticleSnapshot> {
    throw new Error("Method not implemented.");
  }
}
