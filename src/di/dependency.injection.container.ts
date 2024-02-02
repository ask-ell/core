import { ContainerInstance } from "typedi";

export default class DependencyInjectionContainer extends ContainerInstance {
  constructor() {
    super(new Date().getTime().toString());
  }
}
