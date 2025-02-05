import { IPersistedEntity } from "@_core";

import { IArticle } from "./article.interface";
import { UIDType } from "../../../core/types";
import { IArticleUID } from "./article.uid.interface";
import { ArticleState } from "../article.state";

export interface IPersistedArticle
  extends IPersistedEntity<ArticleState, IArticle, UIDType, IArticleUID> {}
