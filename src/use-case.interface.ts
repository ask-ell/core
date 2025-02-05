export interface IUseCase<DTO, Result> {
  run: (dto: DTO) => Result | Promise<Result>
}
