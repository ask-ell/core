export class ApplicationError extends Error {
  constructor(message: string) {
    super(`Application error : ${message}`);
  }
}
