import { IUseCase } from "@_core/hexa";

import { UpdateArticleUseCaseInput, UpdateArticleUseCaseOutput } from "./types";

export interface IUpdateArticleUseCase
  extends IUseCase<
    UpdateArticleUseCaseInput,
    Promise<UpdateArticleUseCaseOutput>
  > {}
