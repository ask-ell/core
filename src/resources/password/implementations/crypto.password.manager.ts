import { randomBytes, pbkdf2 } from "node:crypto";

import { HashedPassword } from "./hashed.password";
import { IHashedPassword } from "../interfaces/hashed.password.interface";
import {
  GenerateRandomPasswordResultDTO,
  IPasswordManager,
} from "../interfaces/password.manager.interface";

type CryptoPasswordManagerOptions = {
  salt: string;
  algorithm: string;
  pbkdf2Iterations: number;
  generatedKeysLength: number;
};

export class CryptoPasswordManager implements IPasswordManager {
  private options: CryptoPasswordManagerOptions;

  constructor(options: {
    salt: string;
    algorithm?: string;
    pbkdf2Iterations?: number;
    generatedKeysLength?: number;
  }) {
    this.options = {
      salt: options.salt,
      algorithm: options.algorithm ?? "sha512",
      pbkdf2Iterations: options.pbkdf2Iterations ?? 100_000,
      generatedKeysLength: options.generatedKeysLength ?? 64,
    };
  }

  async generateFromPlainText(plainText: string): Promise<IHashedPassword> {
    const hashedValue: string = await this.generateHash(plainText);
    return new HashedPassword(`${this.options.salt}:${hashedValue}`);
  }

  async generateRandom(size: number): Promise<GenerateRandomPasswordResultDTO> {
    const randomPasswordPlainText: string = randomBytes(size).toString("hex");
    return {
      randomPasswordPlainText,
      hashedPassword: await this.generateFromPlainText(randomPasswordPlainText),
    };
  }

  async matchs(
    plainText: string,
    hashedPassword: IHashedPassword
  ): Promise<boolean> {
    const [, hashedValue] = hashedPassword.toString().split(":");
    return (await this.generateHash(plainText)) === hashedValue;
  }

  private generateHash = (plainText: string): Promise<string> =>
    new Promise<string>((resolve, reject): void => {
      const { salt, pbkdf2Iterations, generatedKeysLength, algorithm } =
        this.options;
      pbkdf2(
        plainText,
        salt,
        pbkdf2Iterations,
        generatedKeysLength,
        algorithm,
        (error: Error | null, generatedKey: Buffer): void => {
          if (error) {
            reject(error);
            return;
          }
          resolve(generatedKey.toString("hex"));
        }
      );
    });
}
