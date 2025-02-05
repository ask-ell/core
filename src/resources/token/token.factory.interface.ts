import { IToken } from "./token.interface";

export interface ITokenFactory {
  create(tokenValue: string): IToken;
}
