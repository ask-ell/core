import { EntityUID } from "@_core";

import { UIDType } from "../../../core/types";
import { IArticle } from "../interfaces/article.interface";
import { IArticleUID } from "../interfaces/article.uid.interface";
import { ArticleState } from "../article.state";

export class ArticleUID
  extends EntityUID<UIDType, ArticleState, IArticle>
  implements IArticleUID {}
