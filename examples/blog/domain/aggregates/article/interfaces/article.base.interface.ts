import type { IEntityBase } from "@_core";

import type { IArticleSnapshot } from "./article.snapshot.interface";
import { UIDValueType } from "../../../core/types";
import { IPersistedArticleSnapshot } from "./persisted.article.snapshot.interface";

export interface IArticleBase<_ArticleSnapshot extends IArticleSnapshot>
  extends IEntityBase<
    UIDValueType,
    IPersistedArticleSnapshot,
    _ArticleSnapshot
  > {
  setTitle(newTitle: string): void;
  setDescription(newDescription: string): void;
}
