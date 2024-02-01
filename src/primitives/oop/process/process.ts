import Entity from "../entity/entity";
import Executable from "./executable";
import {
  ProcessConstructor,
  ProcessData,
  ProcessEventCallbacks,
  ProcessEventTypes,
  ProcessLog,
  ProcessLogConstructor,
} from "./types";

export default class Process extends Entity<ProcessData> {
  private eventCallbacks = {
    [ProcessEventTypes.out]:
      [] as ProcessEventCallbacks[ProcessEventTypes.out][],
    [ProcessEventTypes.exit]:
      [] as ProcessEventCallbacks[ProcessEventTypes.exit][],
  };

  static INPUT_SYMBOL = 0;

  constructor(data: ProcessConstructor) {
    super({
      ...data,
      stdout: [],
    });
  }

  getExecutable(): Executable {
    return this.state.executable;
  }

  in(inputValue: string): void {
    const logContainsInputIndex: ProcessLog =
      this.state.stdout[this.state.stdout.length - 1];
    const inputMarker = logContainsInputIndex[logContainsInputIndex.length - 1];

    if (inputMarker !== Process.INPUT_SYMBOL) {
      return;
    }

    logContainsInputIndex[logContainsInputIndex.length - 1] = inputValue;
    this.eventCallbacks[ProcessEventTypes.out].forEach((eventCallback) => {
      eventCallback(logContainsInputIndex);
    });
  }

  out(_log: ProcessLogConstructor): void {
    const log: ProcessLog = Array.isArray(_log) ? _log : [_log];
    this.state.stdout.push(log);
    this.eventCallbacks[ProcessEventTypes.out].forEach((eventCallback) => {
      eventCallback(log);
    });
  }

  on<ET extends ProcessEventTypes>(
    eventType: ET,
    callback: ProcessEventCallbacks[ET]
  ): void;
  on(eventType: ProcessEventTypes, callback: any): void {
    this.eventCallbacks[eventType].push(callback);
  }

  isExited(): boolean {
    return this.state.result !== 0 && !!this.state.result;
  }

  exit(result: number): void {
    this.state.result = result;

    this.eventCallbacks[ProcessEventTypes.exit].forEach((eventCallback) => {
      eventCallback(result);
    });
  }
}
