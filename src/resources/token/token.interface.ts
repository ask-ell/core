import { IEqualizable } from "../../primitives/oop/equalizable";
import { IStringable } from "../../primitives/oop/stringable";

export interface IToken extends IStringable, IEqualizable<IToken> {}
