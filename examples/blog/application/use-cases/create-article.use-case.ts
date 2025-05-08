import type { IArticle } from "../domain";
import { Article } from "../domain";

import {
  CreateArticleUseCaseInput,
  CreateArticleUseCaseOutput,
} from "../ports/driving/types";
import { ICreateArticleUseCase } from "../ports/driving/create-article.use-case.interface";
import { IUnitOfWork } from "../unit-of-work.interface";

export class CreateArticleUseCase implements ICreateArticleUseCase {
  constructor(private unitOfWork: IUnitOfWork) {}

  run(dto: CreateArticleUseCaseInput): Promise<CreateArticleUseCaseOutput> {
    const newArticle: IArticle = new Article(dto);
    return this.unitOfWork
      .getArticleRepository()
      .save(newArticle.getSnapshot());
  }
}
