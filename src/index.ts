import { ChangeDetectionQueue } from './change-detection-queue'
import { Environment } from './environment'
import { Logger } from './logger'
import { isDefinedAndNotNull, isUndefinedOrNull } from './nullables'
import { PercentageIncrementor } from './percentage-incrementor'
import { wait } from './wait'
import {
  type EntityList,
  type IO,
  type NumberOrNotDefined,
  type Option,
  type StringOrNotDefined,
  type OnChangesDetectedCallback,
  type OnIncrementCallback,
  type PercentageIncrementorState
} from './types'
import type { I_UID } from './uid.interface'
import type { IUseCase } from './use-case.interface'

export * from './di'
export * from './errors'
export * from './http'
export * from './primitives'
export * from './resources'

export type {
  EntityList,
  IO,
  NumberOrNotDefined,
  Option,
  StringOrNotDefined,
  I_UID,
  OnChangesDetectedCallback,
  OnIncrementCallback,
  PercentageIncrementorState,
  IUseCase
}

export {
  PercentageIncrementor,
  Logger,
  Environment,
  ChangeDetectionQueue,
  wait,
  isDefinedAndNotNull,
  isUndefinedOrNull
}
