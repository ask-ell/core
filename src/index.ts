import CssFile from './assets/css.file'
import type HTMLViewData from './assets/html.view.data'
import HTMLView from './assets/html.view'
import JsFile from './assets/js.file'
import { append, find } from './array'
import { _if } from './boolean'
import { log } from './console'
import { type Either, left, matchEither, right } from './either'
import { identity, pipe } from './function'
import { type IO, io } from './io'
import {
  type Option,
  fromNullableOption,
  matchOption,
  none,
  some
} from './options'
import type ServerProvider from './server.provider'
import {
  type StringOrUndefined,
  isEmptyString,
  length,
  string
} from './string'
import type Stringable from './stringable'
import { type MaybeUndefined } from './undefined'

export type {
  HTMLViewData,
  ServerProvider,
  Stringable,
  StringOrUndefined,
  Either,
  IO,
  Option,
  MaybeUndefined
}

export {
  HTMLView,
  CssFile,
  JsFile,
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
  none
}
