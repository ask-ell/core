import type { IArticle } from "../interfaces/article.interface";
import type { IArticleSnapshot } from "../interfaces/article.snapshot.interface";
import { ArticleBase } from "./article.base";

export class Article
  extends ArticleBase<IArticleSnapshot>
  implements IArticle {}
