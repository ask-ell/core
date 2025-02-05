import { Entity } from "@_core";

import { ArticleState } from "../article.state";
import { IArticle } from "../interfaces/article.interface";

export class Article extends Entity<ArticleState> implements IArticle {}
