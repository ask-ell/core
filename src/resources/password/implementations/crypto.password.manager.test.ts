import type { IHashedPassword, IPasswordManager } from "@_core";
import { CryptoPasswordManager } from "@_core";

describe(CryptoPasswordManager.name, (): void => {
  const passwordManager: IPasswordManager = new CryptoPasswordManager({
    salt: "myReallyComplicatedCustomizedSalt",
    generatedKeysLength: 20,
    pbkdf2Iterations: 10,
    algorithm: "sha256",
  });

  it("Can generate and detect specific password", async (): Promise<void> => {
    const hashedPassword: IHashedPassword =
      await passwordManager.generateFromPlainText("mySuperSecret");
    expect(
      await passwordManager.matchs("mySuperSecret", hashedPassword)
    ).toBeTruthy();
  });

  it("Can generate and detect random password", async (): Promise<void> => {
    const promiseRunners: (() => Promise<void>)[] = [];

    for (let size = 5; size < 20; size++) {
      const promiseRunner = async (): Promise<void> => {
        const { hashedPassword, randomPasswordPlainText } =
          await passwordManager.generateRandom(size);
        expect(passwordManager.matchs(randomPasswordPlainText, hashedPassword));
      };
      promiseRunners.push(promiseRunner);
    }

    await Promise.all(promiseRunners.map((promiseRunner) => promiseRunner()));
  });
});
