import type { IEntityProvider } from "./oop/entity/interfaces/entity.provider.interface";
import type { IEntityRepository } from "./oop/entity/interfaces/entity.repository.interface";
import type { IPersistedEntity } from "./oop/entity/interfaces/persisted.entity.interface";
import type { Maybe, MaybeNullOrUndefined, MaybeUndefined } from "./fp/maybe";
import type { IEqualizable } from "./oop/equalizable";
import type { IStringable } from "./oop/stringable";
import type { IEntity } from "./oop/entity/interfaces/entity.interface";
import type { IEntityUID } from "./oop/entity/interfaces/entity.uid.interface";
import type { IPersistedEntityFactory } from "./oop/entity/interfaces/persisted.entity.factory.interface";
import { Entity } from "./oop/entity/implementations/entity";
import { EntityUID } from "./oop/entity/implementations/entity.uid";
import { PersistedEntityList } from "./oop/entity/implementations/persist.entity.list";
import { append, find } from "./fp/array";
import { _if } from "./fp/boolean";
import { log } from "./fp/console";
import { left, matchEither, right } from "./fp/either";
import { identity, pipe } from "./fp/function";
import { io } from "./fp/io";
import { fromNullableOption, matchOption, none, some } from "./fp/options";
import { isEmptyString, length, string, stringToNumber } from "./fp/string";
import { PersistedEntityFactory } from "./oop/entity/implementations/persisted.entity.factory";
import { PersistedEntity } from "./oop/entity/implementations/persisted.entity";

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
  IEntityUID,
  IPersistedEntityFactory,
};

export {
  Entity,
  EntityUID,
  PersistedEntityList,
  PersistedEntityFactory,
  PersistedEntity,
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
