import type { IEntityProvider } from "./oop/entity/interfaces/entity.provider.interface";
import type { IEntityRepository } from "./oop/entity/interfaces/entity.repository.interface";
import type { IPersistedEntity } from "./oop/entity/interfaces/persisted.entity.interface";
import type { Maybe, MaybeNullOrUndefined, MaybeUndefined } from "./fp/maybe";
import type { IEqualizable } from "./oop/equalizable";
import type { IStringable } from "./oop/stringable";
import type { IEntity } from "./oop/entity/interfaces/entity.interface";
import type { IEntitySnapshot } from "./oop/entity/interfaces/entity.snapshot.interface";
import type { IPersistedEntitySnapshot } from "./oop/entity/interfaces/persisted.entity.snapshot.interface";
import type { ISnapshotable } from "./oop/snapshotable.interface";
import type { IEntityBase } from "./oop/entity/interfaces/entity.base.interface";

import { EntityBase } from "./oop/entity/implementations/entity.base";

import { append, find } from "./fp/array";
import { _if } from "./fp/boolean";
import { log } from "./fp/console";
import { left, matchEither, right } from "./fp/either";
import { identity, pipe } from "./fp/function";
import { io } from "./fp/io";
import { fromNullableOption, matchOption, none, some } from "./fp/options";
import { isEmptyString, length, string, stringToNumber } from "./fp/string";

export type {
  IEntityProvider,
  IEntityRepository,
  Maybe,
  MaybeNullOrUndefined,
  MaybeUndefined,
  IEqualizable,
  IStringable,
  IPersistedEntity,
  IEntity,
  IEntitySnapshot,
  IPersistedEntitySnapshot,
  ISnapshotable,
  IEntityBase,
};

export {
  EntityBase,
  append,
  find,
  _if,
  log,
  left,
  matchEither,
  right,
  identity,
  pipe,
  io,
  fromNullableOption,
  matchOption,
  some,
  isEmptyString,
  length,
  string,
  stringToNumber,
  none,
};
