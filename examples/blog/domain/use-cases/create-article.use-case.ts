import type { IUseCase } from "@_core";

import { Article } from "../aggregates/article/implementations/article";
import { IArticleRepository } from "../aggregates/article/interfaces/article.repository.interface";
import { IPersistedArticle } from "../aggregates/article/interfaces/persisted.article.interface";
import { IArticle } from "../aggregates/article/interfaces/article.interface";

export type CreateArticleUseCaseDTO = {
  title: string;
  description?: string;
};

export interface ICreateArticleUseCase
  extends IUseCase<CreateArticleUseCaseDTO, IPersistedArticle> {}

export class CreateArticleUseCase implements ICreateArticleUseCase {
  constructor(private articleRepository: IArticleRepository) {}

  run({
    title,
    description,
  }: CreateArticleUseCaseDTO): Promise<IPersistedArticle> {
    const newArticle: IArticle = new Article({
      title,
      description,
    });
    return this.articleRepository.save(newArticle);
  }
}
