import Token from "./token";

export default interface TokenFactory {
  create(tokenValue: string): Token;
}
