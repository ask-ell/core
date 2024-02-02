import "reflect-metadata";
import DependencyInjectionContainer from "./dependency.injection.container";
import Injectable from "./injectable";

@Injectable()
class FakeInjectableA {}

@Injectable()
class FakeInjectableB {
  constructor(readonly fakeInjectableA: FakeInjectableA) {}
}

describe(DependencyInjectionContainer.name, () => {
  it("Should get matching injected class", () => {
    const dependencyInjectionContainer: DependencyInjectionContainer =
      new DependencyInjectionContainer();
    const injectableValue: FakeInjectableA =
      dependencyInjectionContainer.get(FakeInjectableA);
    expect(injectableValue).toBeInstanceOf(FakeInjectableA);
  });
  it("Should get matching injected deeper class", () => {
    const dependencyInjectionContainer: DependencyInjectionContainer =
      new DependencyInjectionContainer();
    const injectableValue: FakeInjectableB =
      dependencyInjectionContainer.get(FakeInjectableB);
    expect(injectableValue.fakeInjectableA).toBeInstanceOf(FakeInjectableA);
  });

  it("Should get matching injected value", () => {
    const dependencyInjectionContainer: DependencyInjectionContainer =
      new DependencyInjectionContainer();
    dependencyInjectionContainer.set("KEY", "VALUE");
    const value: string = dependencyInjectionContainer.get("KEY");
    expect(value).toBe("VALUE");
  });
});
