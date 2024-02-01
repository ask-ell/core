import Stringable from "../stringable";

export default class Executable implements Stringable {
  constructor(
    readonly className: string,
    readonly methodName: string,
    readonly args: string[] = []
  ) {}

  toString(): string {
    return `${this.className}:${this.methodName} ${this.args.join(" ")}`;
  }

  static fromString(value: string): Executable {
    const [className, methodNameAndArgs] = value.split(":");
    const [methodName, ...args] = methodNameAndArgs.split(" ");
    return new Executable(className, methodName, args);
  }
}
