import { ok, IResult, fail } from "@_core";
import { AggregateRoot } from "@_core/ddd";

import { WrongArticleTitleSizeError } from "../../../errors";
import { MINIMUM_CHARACTERS_REQUIRED_FOR_ARTICLE_TITLE } from "./constants";
import type { IArticle } from "./article.interface";
import { IArticleState } from "./article.state.interface";

export class Article extends AggregateRoot<IArticleState> implements IArticle {
  checkStateValidity(newState: IArticleState): IResult<void> {
    if (newState.title.length < MINIMUM_CHARACTERS_REQUIRED_FOR_ARTICLE_TITLE) {
      return fail(new WrongArticleTitleSizeError());
    }
    return ok();
  }
}
