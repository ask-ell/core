import { ok, IResult, fail } from "@_core";
import { AggregateRoot } from "@_core/ddd";

import { MINIMUM_CHARACTERS_REQUIRED_FOR_ARTICLE_TITLE } from "./constants";
import type { IArticle } from "./article.interface";
import { IArticleState } from "./article.state.interface";
import { WrongArticleTitleSizeError } from "./errors/wrong-article-title-size.error";

export class Article extends AggregateRoot<IArticleState> implements IArticle {
  checkStateValidity(newState: IArticleState): IResult<void> {
    if (newState.title.length < MINIMUM_CHARACTERS_REQUIRED_FOR_ARTICLE_TITLE) {
      return fail(new WrongArticleTitleSizeError());
    }
    return ok(void 0);
  }
}
