import type { IArticleRepository } from "./aggregates/article/interfaces/article.repository.interface";
import type { IPersistedArticleSnapshot } from "./aggregates/article/interfaces/persisted.article.snapshot.interface";
import type { IArticleSnapshot } from "./aggregates/article/interfaces/article.snapshot.interface";
import type { UIDValueType } from "./core/types";
import type { ICreateArticleUseCase } from "./use-cases/create-article.use-case";
import type { IUpdateArticleUseCase } from "./use-cases/update-article.use-case";
import type { IArticleProvider } from "./aggregates/article/interfaces/article.provider.interface";

import { CreateArticleUseCase } from "./use-cases/create-article.use-case";
import { UpdateArticleUseCase } from "./use-cases/update-article.use-case";
import { WrongArticleTitleSizeError } from "./errors/wrong-article-title-size.error";

export type {
  UIDValueType,
  IArticleSnapshot,
  IPersistedArticleSnapshot,
  IArticleRepository,
  ICreateArticleUseCase,
  IUpdateArticleUseCase,
  IArticleProvider,
};

export {
  CreateArticleUseCase,
  UpdateArticleUseCase,
  WrongArticleTitleSizeError,
};
