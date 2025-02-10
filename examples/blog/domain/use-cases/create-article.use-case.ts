import type { IUseCase } from "@_core";

import type { IArticleSnapshot } from "../aggregates/article/interfaces/article.snapshot.interface";
import type { IPersistedArticleSnapshot } from "../aggregates/article/interfaces/persisted.article.snapshot.interface";
import type { IArticleRepository } from "../aggregates/article/interfaces/article.repository.interface";
import type { IArticle } from "../aggregates/article/interfaces/article.interface";
import { Article } from "../aggregates/article/implementations/article";

export interface ICreateArticleUseCase
  extends IUseCase<IArticleSnapshot, Promise<IPersistedArticleSnapshot>> {}

export class CreateArticleUseCase implements ICreateArticleUseCase {
  constructor(private articleRepository: IArticleRepository) {}

  run(dto: IArticleSnapshot): Promise<IPersistedArticleSnapshot> {
    const newArticle: IArticle = new Article(dto);
    return this.articleRepository.save(newArticle.getSnapshot());
  }
}
