import { IAggregateRoot } from "@_core/ddd";

import { IArticleState } from "./article.state.interface";

export interface IArticle extends IAggregateRoot<IArticleState> {}
