import { IPersistedArticleSnapshot } from "../interfaces/persisted.article.snapshot.interface";
import { IPersistedArticle } from "../interfaces/persisted.article.interface";
import { ArticleBase } from "./article.base";

export class PersistedArticle
  extends ArticleBase<IPersistedArticleSnapshot>
  implements IPersistedArticle
{
  isEquals(valueToCompare: IPersistedArticle): boolean {
    return this.data.uid === valueToCompare.getSnapshot().uid;
  }
}
