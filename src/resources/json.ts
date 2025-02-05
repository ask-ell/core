import { IStringable } from "../primitives/oop/stringable";

export class Json<Data> implements IStringable {
  constructor(private data: Data) {}

  toString(): string {
    return JSON.stringify(this.data);
  }
}
