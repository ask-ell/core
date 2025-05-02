import { IArticleProvider } from "./ports/driven/article.provider.interface";
import { IArticleRepository } from "./ports/driven/article.repository.interface";

export interface IUnitOfWork {
  getArticleProvider(): IArticleProvider;
  getArticleRepository(): IArticleRepository;
}
