import { IPersistedEntity } from "@_core";

import { UIDValueType } from "../../../core/types";
import { IArticleBase } from "./article.base.interface";
import { IPersistedArticleSnapshot } from "./persisted.article.snapshot.interface";

export interface IPersistedArticle
  extends IPersistedEntity<
      UIDValueType,
      IPersistedArticleSnapshot,
      IPersistedArticle
    >,
    IArticleBase<IPersistedArticleSnapshot> {}
