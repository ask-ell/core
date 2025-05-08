type SuccessCallback<Data, T> = (data: Data) => T
type FailCallback<T> = (error: Error) => T

export interface IResult<Data> {
  fold: <T>(
    successCallback: SuccessCallback<Data, T>,
    failCallback: FailCallback<T>
  ) => T
}

class Result<Data> implements IResult<Data> {
  constructor(
    private readonly successValue?: Data,
    private readonly failValue?: Error
  ) {}

  fold<T>(
    successCallback: SuccessCallback<Data, T>,
    failCallback: FailCallback<T>
  ): T {
    if (this.failValue != null) {
      return failCallback(this.failValue)
    }
    return successCallback(this.successValue as Data)
  }
}

export const success = <T>(data: T): IResult<T> => new Result(data, undefined)

export const ok = (): IResult<void> => success(undefined)

export const fail = <T>(error: Error): Result<T> =>
  new Result<T>(undefined, error)
