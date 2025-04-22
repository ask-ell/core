import {
  type IO,
  type NumberOrNotDefined,
  type Option,
  type StringOrNotDefined,
  type OnChangesDetectedCallback,
  type OnIncrementCallback,
  type PercentageIncrementorState
} from './types'
import type { ILogger } from './logger.interface'
import type { I_UID } from './uid.interface'
import type { IUseCase } from './use-case.interface'
import { ChangeDetectionQueue } from './change-detection-queue'
import { Environment } from './environment'
import { isDefinedAndNotNull, isUndefinedOrNull } from './nullables'
import { PercentageIncrementor } from './percentage-incrementor'
import { wait } from './wait'

export * from './di'
export * from './errors'
export * from './http'
export * from './primitives'
export * from './resources'
export * from './result'

export type {
  IO,
  NumberOrNotDefined,
  Option,
  StringOrNotDefined,
  OnChangesDetectedCallback,
  OnIncrementCallback,
  PercentageIncrementorState,
  IUseCase,
  ILogger
}

export {
  PercentageIncrementor,
  Environment,
  ChangeDetectionQueue,
  wait,
  isDefinedAndNotNull,
  isUndefinedOrNull
}
