import type { IArticleProvider } from "./ports/driven/article.provider.interface";
import type { IArticleRepository } from "./ports/driven/article.repository.interface";
import type { ICreateArticleUseCase } from "./ports/driving/create-article.use-case.interface";
import type { IUpdateArticleUseCase } from "./ports/driving/update-article.use-case.interface";
import type { CreateArticleUseCaseInput } from "./ports/driving/types";
import type { CreateArticleUseCaseOutput } from "./ports/driving/types";
import type { UpdateArticleUseCaseOutput } from "./ports/driving/types";
import type { ArticleAggregateRootState } from "./ports/driven/types";
import type { IUnitOfWork } from "./unit-of-work.interface";
import type { SaveArticleInput } from "./ports/driven/types";

import { CreateArticleUseCase } from "./use-cases/create-article.use-case";
import { UpdateArticleUseCase } from "./use-cases/update-article.use-case";
import { ApplicationErrorsMap } from "./errors";

export type {
  IUnitOfWork,
  SaveArticleInput,
  IArticleProvider,
  IArticleRepository,
  ICreateArticleUseCase,
  IUpdateArticleUseCase,
  CreateArticleUseCaseInput,
  CreateArticleUseCaseOutput,
  UpdateArticleUseCaseOutput,
  ArticleAggregateRootState,
};

export { CreateArticleUseCase, UpdateArticleUseCase, ApplicationErrorsMap };
