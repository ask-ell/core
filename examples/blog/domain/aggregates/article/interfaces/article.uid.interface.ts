import { IEntityUID } from "@_core";

import { UIDType } from "../../../core/types";
import { IArticle } from "./article.interface";

export interface IArticleUID extends IEntityUID<UIDType, IArticle> {}
