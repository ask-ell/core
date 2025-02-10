import type { IEntity } from "@_core";

import type { IArticleBase } from "./article.base.interface";
import type { IArticleSnapshot } from "./article.snapshot.interface";
import type { IPersistedArticleSnapshot } from "./persisted.article.snapshot.interface";
import { UIDValueType } from "../../../core/types";

export interface IArticle
  extends IEntity<UIDValueType, IPersistedArticleSnapshot, IArticleSnapshot>,
    IArticleBase<IArticleSnapshot> {}
