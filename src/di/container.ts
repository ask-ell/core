import { ContainerInstance } from "typedi";

export default class Container extends ContainerInstance {
  constructor() {
    super(new Date().getTime().toString());
  }
}
