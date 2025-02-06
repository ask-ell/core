import { PersistedEntity } from "@_core";

import { ArticleState } from "../article.state";
import { IPersistedArticle } from "../interfaces/persisted.article.interface";
import { IArticleUID } from "../interfaces/article.uid.interface";
import { IArticle } from "../interfaces/article.interface";
import { UIDType } from "../../../core/types";

export class PersistedArticle
  extends PersistedEntity<ArticleState, IArticle, UIDType, IArticleUID>
  implements IPersistedArticle {}
