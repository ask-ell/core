import { ProcessBase } from "./implementations/process.base";

export type ProcessLog = (string | typeof ProcessBase.INPUT_SYMBOL)[];

type ProcessEventCallback<P> = (params: P) => void;

export enum ProcessEventTypes {
  out = "out",
  exit = "exit",
}

export type ProcessEventCallbacks = {
  [ProcessEventTypes.out]: ProcessEventCallback<ProcessLog>;
  [ProcessEventTypes.exit]: ProcessEventCallback<number>;
};
