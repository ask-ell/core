import { config } from 'dotenv'

import { isUndefinedOrNull } from './nullables'
import { Injectable } from './di'
import { UnknownEnvironmentVariableError } from './errors'

@Injectable()
export default class Environment<EnvironmentState> {
  private readonly state: EnvironmentState

  constructor() {
    config()
    this.state = process.env as EnvironmentState
  }

  get<Key extends keyof EnvironmentState>(key: Key): EnvironmentState[Key] {
    const value: EnvironmentState[Key] = this.state[key]

    if (isUndefinedOrNull(value) || value === '') {
      throw new UnknownEnvironmentVariableError(String(key))
    }

    return value
  }
}
