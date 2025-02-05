import type {
  IArticleRepository,
  IPersistedArticle,
  CreateArticleUseCaseDTO,
  IPersistedArticleFactory,
  ICreateArticleUseCase,
} from "./domain";
import { CreateArticleUseCase, PersistedArticleFactory } from "./domain";

import { InMemoryArticleRepository, InMemoryDatabase } from "./infra/in-memory";

describe("Blog tests", (): void => {
  it("A user can create an article", async (): Promise<void> => {
    const database: InMemoryDatabase = new InMemoryDatabase();
    const persistedArticleFactory: IPersistedArticleFactory =
      new PersistedArticleFactory();
    const articleRepository: IArticleRepository = new InMemoryArticleRepository(
      database,
      persistedArticleFactory
    );
    const createArticleUseCase: ICreateArticleUseCase =
      new CreateArticleUseCase(articleRepository);

    const dto: CreateArticleUseCaseDTO = {
      title: "My article's title",
    };
    const createdArticle: IPersistedArticle = await createArticleUseCase.run(
      dto
    );

    expect(createdArticle.getSnapshot().title).toEqual(dto.title);
    expect(createdArticle.getSnapshot().description).toBeUndefined();
  });
});
