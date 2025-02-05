import type { UIDType } from "./core/types";
import type { IArticleRepository } from "./aggregates/article/interfaces/article.repository.interface";
import type { IPersistedArticle } from "./aggregates/article/interfaces/persisted.article.interface";
import type { CreateArticleUseCaseDTO } from "./use-cases/create-article.use-case";
import type { IArticle } from "./aggregates/article/interfaces/article.interface";
import type { IArticleUID } from "./aggregates/article/interfaces/article.uid.interface";
import type { IPersistedArticleFactory } from "./aggregates/article/interfaces/persisted.article.factory.interface";
import type { ICreateArticleUseCase } from "./use-cases/create-article.use-case";
import { CreateArticleUseCase } from "./use-cases/create-article.use-case";
import { ArticleUID } from "./aggregates/article/implementations/article.uid";
import { PersistedArticleFactory } from "./aggregates/article/implementations/persisted.article.factory";

export type {
  UIDType,
  IArticleRepository,
  IPersistedArticle,
  IArticle,
  IArticleUID,
  IPersistedArticleFactory,
  ICreateArticleUseCase,
};

export {
  CreateArticleUseCase,
  CreateArticleUseCaseDTO,
  PersistedArticleFactory,
  ArticleUID,
};
