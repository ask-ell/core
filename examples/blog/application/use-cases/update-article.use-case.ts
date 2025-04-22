import type { MaybeUndefined } from "@_core";

import { Article, IArticle, IArticleState } from "../../domain";

import { IUpdateArticleUseCase } from "../ports/driving/update-article.use-case.interface";
import {
  UpdateArticleUseCaseInput,
  UpdateArticleUseCaseOutput,
} from "../ports/driving/types";
import { ArticleAggregateRootState } from "../ports/driven/types";
import { IUnitOfWork } from "../unit-of-work.interface";

export class UpdateArticleUseCase implements IUpdateArticleUseCase {
  constructor(private unitOfWork: IUnitOfWork) {}

  async run({
    uid,
    title,
    description,
  }: UpdateArticleUseCaseInput): Promise<UpdateArticleUseCaseOutput> {
    const articleToUpdateState: MaybeUndefined<ArticleAggregateRootState> =
      await this.unitOfWork.getArticleProvider().findOneByUID(uid);
    if (!articleToUpdateState) {
      return undefined;
    }

    const articleToUpdate: IArticle = new Article(articleToUpdateState);

    articleToUpdate.updateAndCheckStateValidity(() => ({
      title,
      description,
    }));

    const updatedArticleSnapshot: IArticleState = articleToUpdate.getSnapshot();
    const hasBeenUpdated: boolean = await this.unitOfWork
      .getArticleRepository()
      .updateOne({
        uid,
        ...updatedArticleSnapshot,
      });
    return hasBeenUpdated
      ? {
          uid,
          ...updatedArticleSnapshot,
        }
      : undefined;
  }
}
