import { MaybeUndefined } from "@_core";

import {
  IArticleProvider,
  IPersistedArticleSnapshot,
  UIDValueType,
} from "../../domain";
import { InMemoryDatabase } from "./in-memory.database";
import { fakeWait, breakReference } from "./utils";

export class InMemoryArticleProvider implements IArticleProvider {
  constructor(private database: InMemoryDatabase) {}

  async findOne(
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
}
