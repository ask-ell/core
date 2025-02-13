import type { IUseCase, MaybeUndefined } from "@_core";

import type { IArticleRepository } from "../aggregates/article/interfaces/article.repository.interface";
import type { IPersistedArticleSnapshot } from "../aggregates/article/interfaces/persisted.article.snapshot.interface";
import type { IPersistedArticle } from "../aggregates/article/interfaces/persisted.article.interface";
import type { IArticleProvider } from "../aggregates/article/interfaces/article.provider.interface";
import { PersistedArticle } from "../aggregates/article/implementations/persisted.article";

export interface IUpdateArticleUseCase
  extends IUseCase<
    IPersistedArticleSnapshot,
    Promise<MaybeUndefined<IPersistedArticleSnapshot>>
  > {}

export class UpdateArticleUseCase implements IUpdateArticleUseCase {
  constructor(
    private articleRepository: IArticleRepository,
    private articleProvider: IArticleProvider
  ) {}

  async run({
    uid,
    title,
    description,
  }: IPersistedArticleSnapshot): Promise<
    MaybeUndefined<IPersistedArticleSnapshot>
  > {
    const articleToUpdateSnapshot: MaybeUndefined<IPersistedArticleSnapshot> =
      await this.articleProvider.findOneByUID(uid);
    if (!articleToUpdateSnapshot) {
      return undefined;
    }

    const articleToUpdate: IPersistedArticle = new PersistedArticle(
      articleToUpdateSnapshot
    );
    articleToUpdate.setTitle(title);
    articleToUpdate.setDescription(description);

    const updatedArticleSnapshot: IPersistedArticleSnapshot =
      articleToUpdate.getSnapshot();
    const hasBeenUpdated: boolean = await this.articleRepository.updateOne(
      updatedArticleSnapshot
    );
    return hasBeenUpdated ? updatedArticleSnapshot : undefined;
  }
}
