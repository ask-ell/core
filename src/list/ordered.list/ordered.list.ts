import List from "../list";
import { OrderedListElement } from "./types";

export default class OrderableList<T> extends List<OrderedListElement<T>> {
  constructor(elements = new Array<T>()) {
    super();
    elements.forEach((element: T, position: number) => {
      this.push({
        value: element,
        position,
      });
    });
  }
}
