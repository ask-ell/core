import type { IPersistedEntityFactory } from "@_core";
import { PersistedEntityFactory } from "@_core";

import { UIDType } from "../../../core/types";
import { ArticleState } from "../article.state";
import { IArticle } from "../interfaces/article.interface";
import { IArticleUID } from "../interfaces/article.uid.interface";
import { IPersistedArticle } from "../interfaces/persisted.article.interface";
import { PersistedArticle } from "./persisted.article";

export class PersistedArticleFactory
  extends PersistedEntityFactory<
    ArticleState,
    IArticle,
    UIDType,
    IArticleUID,
    IPersistedArticle
  >
  implements
    IPersistedEntityFactory<
      ArticleState,
      IArticle,
      UIDType,
      IArticleUID,
      IPersistedArticle
    >
{
  constructor() {
    super(PersistedArticle);
  }
}
