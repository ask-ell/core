import { EntityBase } from "@_core";

import { MINIMUM_CHARACTERS_REQUIRED_FOR_ARTICLE_TITLE } from "../../../core/constants";
import { WrongArticleTitleSizeError } from "../../../errors/wrong-article-title-size.error";
import { IArticleBase } from "../interfaces/article.base.interface";
import { IArticleSnapshot } from "../interfaces/article.snapshot.interface";
import { UIDValueType } from "../../../core/types";
import { IPersistedArticleSnapshot } from "../interfaces/persisted.article.snapshot.interface";

export class ArticleBase<_ArticleSnapshot extends IArticleSnapshot>
  extends EntityBase<UIDValueType, IPersistedArticleSnapshot, _ArticleSnapshot>
  implements IArticleBase<_ArticleSnapshot>
{
  constructor(data: _ArticleSnapshot) {
    super(data);
    this.checkDataValidationAfterUpdate();
  }

  setTitle(newTitle: string): void {
    this.data.title = newTitle;
    this.checkDataValidationAfterUpdate();
  }

  setDescription(newDescription: string): void {
    this.data.description = newDescription;
  }

  private checkDataValidationAfterUpdate(): void {
    if (
      this.data.title.length < MINIMUM_CHARACTERS_REQUIRED_FOR_ARTICLE_TITLE
    ) {
      throw new WrongArticleTitleSizeError();
    }
  }
}
