import Stringable from "../primitives/oop/stringable";

export default class Json<Data> implements Stringable {
  constructor(private data: Data) {}

  toString(): string {
    return JSON.stringify(this.data);
  }
}
