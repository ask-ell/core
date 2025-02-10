import { MaybeUndefined, TestMustFailError } from "@_core";

import type {
  IArticleRepository,
  IArticleSnapshot,
  ICreateArticleUseCase,
  IUpdateArticleUseCase,
  IPersistedArticleSnapshot,
  IArticleProvider,
} from "./domain";
import {
  CreateArticleUseCase,
  UpdateArticleUseCase,
  WrongArticleTitleSizeError,
} from "./domain";

import {
  InMemoryArticleProvider,
  InMemoryArticleRepository,
  InMemoryDatabase,
} from "./infra/in-memory";

describe("Blog tests", (): void => {
  let database: InMemoryDatabase;
  let articleRepository: IArticleRepository;
  let arcticleProvider: IArticleProvider;
  let createArticleUseCase: ICreateArticleUseCase;
  let updateArticleUseCase: IUpdateArticleUseCase;

  async function createArticle(): Promise<IPersistedArticleSnapshot> {
    const dto: IArticleSnapshot = {
      title: "My article's title",
      description: "My article's description",
    };
    const createdArticle: IPersistedArticleSnapshot =
      await createArticleUseCase.run(dto);
    expect(createdArticle.title).toEqual(dto.title);
    expect(createdArticle.description).toEqual(dto.description);
    return createdArticle;
  }

  beforeEach((): void => {
    database = new InMemoryDatabase();
    articleRepository = new InMemoryArticleRepository(database);
    arcticleProvider = new InMemoryArticleProvider(database);
    createArticleUseCase = new CreateArticleUseCase(articleRepository);
    updateArticleUseCase = new UpdateArticleUseCase(
      articleRepository,
      arcticleProvider
    );
  });

  it("A user cannot create an article with an empty title", async () => {
    try {
      const dto: IArticleSnapshot = {
        title: "",
        description: "My article's description",
      };
      await createArticleUseCase.run(dto);
      throw new TestMustFailError();
    } catch (error) {
      expect(error).toBeInstanceOf(WrongArticleTitleSizeError);
    }
  });

  it("A user can create an article", createArticle);

  it("A user cannot update an article with an empty title", async () => {
    try {
      const createdArticle: IPersistedArticleSnapshot = await createArticle();
      createdArticle.title = "";
      await updateArticleUseCase.run(createdArticle);
      throw new TestMustFailError();
    } catch (error) {
      expect(error).toBeInstanceOf(WrongArticleTitleSizeError);
    }
  });

  it("A user can update an article", async (): Promise<void> => {
    const createdArticle: IPersistedArticleSnapshot = await createArticle();
    createdArticle.title = "My article's new title";
    createdArticle.description = "My article's new description";

    const updatedArticle: MaybeUndefined<IPersistedArticleSnapshot> =
      await updateArticleUseCase.run(createdArticle);

    expect(updatedArticle).toBeDefined();
    expect(updatedArticle!.title).toEqual(createdArticle.title);
    expect(updatedArticle!.description).toEqual(createdArticle.description);
  });
});
