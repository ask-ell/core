export default class UnknownEnvironmentVariableError extends Error {
  constructor(environmentVariableKey: string) {
    super(`Unknown environment variable : "${environmentVariableKey}"`);
  }
}
