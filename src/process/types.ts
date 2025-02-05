import { Executable } from "./implementations/executable";
import { Process } from "./implementations/process";

export type ProcessLog = (string | typeof Process.INPUT_SYMBOL)[];

type ProcessEventCallback<P> = (params: P) => void;

export enum ProcessEventTypes {
  out = "out",
  exit = "exit",
}

export type ProcessEventCallbacks = {
  [ProcessEventTypes.out]: ProcessEventCallback<ProcessLog>;
  [ProcessEventTypes.exit]: ProcessEventCallback<number>;
};

export type ProcessLogConstructor = string | ProcessLog;

export type LogRegisterAction = (log: ProcessLogConstructor) => void;

export type UserInputAsking = () => Promise<string>;

export type ProcessFnParams = {
  out: LogRegisterAction;
  _in: UserInputAsking;
  args: string[];
};

export type ProcessFnResult = Promise<number>;

export type ProcessFn = (params: ProcessFnParams) => ProcessFnResult;

export type ProcessConstructor = {
  executable: Executable;
};

export type ProcessJsonData = {
  result?: number;
  stdout: ProcessLog[];
};

export type ProcessState = ProcessJsonData & ProcessConstructor;
