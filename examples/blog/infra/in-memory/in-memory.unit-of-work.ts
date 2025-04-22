import {
  IArticleProvider,
  IArticleRepository,
  IUnitOfWork,
} from "../../application";

import { InMemoryArticleProvider } from "./in-memory.article.provider";
import { InMemoryArticleRepository } from "./in-memory.article.repository";
import { InMemoryDatabase } from "./in-memory.database";

export class InMemoryUnitOfWork implements IUnitOfWork {
  private database = new InMemoryDatabase();
  private articleProvider: IArticleProvider = new InMemoryArticleProvider(
    this.database
  );
  private articleRepository: IArticleRepository = new InMemoryArticleRepository(
    this.database
  );

  getArticleProvider(): IArticleProvider {
    return this.articleProvider;
  }

  getArticleRepository(): IArticleRepository {
    return this.articleRepository;
  }
}
