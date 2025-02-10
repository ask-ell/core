import { DomainError } from "@_core";

import { MINIMUM_CHARACTERS_REQUIRED_FOR_ARTICLE_TITLE } from "../core/constants";

export class WrongArticleTitleSizeError extends DomainError {
  constructor() {
    super(
      `Article title must contain less than ${MINIMUM_CHARACTERS_REQUIRED_FOR_ARTICLE_TITLE}`
    );
  }
}
