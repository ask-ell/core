import { DomainError } from "@_core/ddd";

import { MINIMUM_CHARACTERS_REQUIRED_FOR_ARTICLE_TITLE } from "../constants";

export class WrongArticleTitleSizeError extends DomainError {
  constructor() {
    super(
      `article title must contain less than ${MINIMUM_CHARACTERS_REQUIRED_FOR_ARTICLE_TITLE}`
    );
  }
}
