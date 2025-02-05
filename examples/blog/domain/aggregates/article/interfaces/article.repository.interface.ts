import { IEntityRepository } from "@_core";

import { UIDType } from "../../../core/types";
import { IArticleUID } from "./article.uid.interface";
import { IArticle } from "./article.interface";
import { IPersistedArticle } from "./persisted.article.interface";
import { ArticleState } from "../article.state";

export interface IArticleRepository
  extends IEntityRepository<
    ArticleState,
    IArticle,
    UIDType,
    IArticleUID,
    IPersistedArticle
  > {}
