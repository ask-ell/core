import type { AggregateRootState } from "./aggregate-root/types";
import type { IAggregateRoot } from "./aggregate-root/aggregate-root.interface";
import type { UID } from "./aggregate-root/types";

import { DomainError } from "./domain.error";
import { AggregateRoot } from "./aggregate-root/aggregate-root";

export type { AggregateRootState, IAggregateRoot, UID };

export { DomainError, AggregateRoot };
