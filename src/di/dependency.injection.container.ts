import { ContainerInstance } from "typedi";

export class DependencyInjectionContainer extends ContainerInstance {
  constructor() {
    super(new Date().getTime().toString());
  }
}
