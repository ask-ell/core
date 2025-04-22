import type { IUseCase } from "@_core/hexa";

import { CreateArticleUseCaseInput, CreateArticleUseCaseOutput } from "./types";

export interface ICreateArticleUseCase
  extends IUseCase<
    CreateArticleUseCaseInput,
    Promise<CreateArticleUseCaseOutput>
  > {}
