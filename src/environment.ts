import { isUndefinedOrNull } from './nullables'

export default class Environment<EnvironmentState> {
  constructor(private readonly state: EnvironmentState) {}

  get<Key extends keyof EnvironmentState>(key: Key): EnvironmentState[Key] {
    const value: EnvironmentState[Key] = this.state[key]

    if (isUndefinedOrNull(value) || value === '') {
      throw new Error(`Unknown environment variable : "${String(key)}"`)
    }

    return value
  }
}
