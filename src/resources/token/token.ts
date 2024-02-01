import Equalizable from "../../primitives/oop/equalizable";
import Stringable from "../../primitives/oop/stringable";

export default interface Token extends Stringable, Equalizable<Token> {}
