import type { IPersistedEntityFactory } from "@_core";

import { ArticleState } from "../article.state";
import { IArticle } from "./article.interface";
import { UIDType } from "../../../core/types";
import { IArticleUID } from "./article.uid.interface";
import { IPersistedArticle } from "./persisted.article.interface";

export interface IPersistedArticleFactory
  extends IPersistedEntityFactory<
    ArticleState,
    IArticle,
    UIDType,
    IArticleUID,
    IPersistedArticle
  > {}
