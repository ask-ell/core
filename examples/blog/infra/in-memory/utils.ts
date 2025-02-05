import { ArticleUID, IArticleUID, UIDType } from "../../domain";

const generateRandomUIDValue: () => UIDType = () => new Date().getTime();

export const generateRandomArticleUID: () => IArticleUID = () =>
  new ArticleUID(generateRandomUIDValue());
