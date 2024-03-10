import type EntityProvider from "./oop/entity/entity.provider";
import type EntityRepository from "./oop/entity/entity.repository";
import Entity from "./oop/entity/entity";
import EntityUID from "./oop/entity/entity.uid";
import type PersistedEntity from "./oop/entity/persisted.entity";
import { append, find } from "./fp/array";
import { _if } from "./fp/boolean";
import { log } from "./fp/console";
import { left, matchEither, right } from "./fp/either";
import { identity, pipe } from "./fp/function";
import { io } from "./fp/io";
import type { Maybe, MaybeNullOrUndefined, MaybeUndefined } from "./fp/maybe";
import { fromNullableOption, matchOption, none, some } from "./fp/options";
import { isEmptyString, length, string, stringToNumber } from "./fp/string";
import type Equalizable from "./oop/equalizable";
import type Stringable from "./oop/stringable";
import PersistedEntityList from "./oop/entity/persist.entity.list";

export type {
  EntityProvider,
  EntityRepository,
  Maybe,
  MaybeNullOrUndefined,
  MaybeUndefined,
  Equalizable,
  Stringable,
  PersistedEntity,
};

export {
  Entity,
  EntityUID,
  PersistedEntityList,
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
