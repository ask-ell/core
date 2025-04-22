type LeftCallback<Data, T> = (data: Data) => T
type RightCallback<T> = (error: Error) => T

export interface IResult<Data> {
  fold: <T>(
    leftCallback: LeftCallback<Data, T>,
    rightCallback: RightCallback<T>
  ) => T
}

class Result<Data> implements IResult<Data> {
  constructor(
    private readonly leftValue?: Data,
    private readonly rightValue?: Error
  ) {}

  fold<T>(
    leftCallback: LeftCallback<Data, T>,
    rightCallback: RightCallback<T>
  ): T {
    if (this.rightValue != null) {
      return rightCallback(this.rightValue)
    }
    return leftCallback(this.leftValue as Data)
  }
}

export const ok = <T>(data: T): IResult<T> => new Result(data, undefined)

export const fail = <T>(error: Error): Result<T> =>
  new Result<T>(undefined, error)
