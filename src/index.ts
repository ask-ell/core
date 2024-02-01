import CssFile from './resources/css.file'
import type HTMLViewData from './resources/html.view.data'
import HTMLView from './resources/html.view'
import JsFile from './resources/js.file'
import type EntityProvider from './primitives/oop/entity/entity.provider'
import type EntityRepository from './primitives/oop/entity/entity.repository'
import Entity from './primitives/oop/entity/entity'
import TestMustFailError from './errors/test-must-fail.error'
import type ServerProvider from './http/server.provider'
import { append, find } from './primitives/fp/array'
import { _if } from './primitives/fp/boolean'
import { log } from './primitives/fp/console'
import { left, matchEither, right } from './primitives/fp/either'
import { identity, pipe } from './primitives/fp/function'
import { io } from './primitives/fp/io'
import type {
  Maybe,
  MaybeNullOrUndefined,
  MaybeUndefined
} from './primitives/fp/maybe'
import {
  fromNullableOption,
  matchOption,
  none,
  some
} from './primitives/fp/options'
import {
  isEmptyString,
  length,
  string,
  stringToNumber
} from './primitives/fp/string'
import type Equalizable from './primitives/oop/equalizable'
import type Stringable from './primitives/oop/stringable'
import type TokenFactory from './resources/token/token.factory'
import type Token from './resources/token/token'
import { isDefinedAndNotNull, isUndefinedOrNull } from './nullables'
import type {
  EntityList,
  IO,
  NumberOrNotDefined,
  Option,
  StringOrNotDefined
} from './types'

export type {
  HTMLViewData,
  EntityProvider,
  EntityRepository,
  ServerProvider,
  Equalizable,
  Stringable,
  Maybe,
  EntityList,
  IO,
  MaybeNullOrUndefined,
  MaybeUndefined,
  Option,
  NumberOrNotDefined,
  StringOrNotDefined,
  TokenFactory,
  Token
}

export {
  HTMLView,
  CssFile,
  JsFile,
  Entity,
  TestMustFailError,
  _if,
  append,
  find,
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
  stringToNumber,
  length,
  string,
  isDefinedAndNotNull,
  isUndefinedOrNull,
  none
}
