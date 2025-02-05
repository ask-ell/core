import { Article } from "./article";
import { ArticleState } from "../article.state";
import { IPersistedArticle } from "../interfaces/persisted.article.interface";
import { IArticleUID } from "../interfaces/article.uid.interface";

export class PersistedArticle extends Article implements IPersistedArticle {
  constructor(readonly uid: IArticleUID, data: ArticleState) {
    super(data);
  }

  isEquals(valueToCompare: IPersistedArticle): boolean {
    return this.uid.isEquals(valueToCompare.uid);
  }
}
