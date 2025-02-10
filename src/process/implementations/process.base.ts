import { EntityBase } from "../../primitives";
import { IPersistedProcessSnapshot } from "../interfaces/persisted.process.snapshot.interface";
import { IProcessBase } from "../interfaces/process.base.interface";
import { IProcessSnapshot } from "../interfaces/process.snapshot.interface";
import { ProcessEventCallbacks, ProcessEventTypes, ProcessLog } from "../types";
import { Executable } from "./executable";

export class ProcessBase<
    UIDValueType,
    _ProcessSnapshot extends IProcessSnapshot<UIDValueType>
  >
  extends EntityBase<
    UIDValueType,
    IPersistedProcessSnapshot<UIDValueType>,
    _ProcessSnapshot
  >
  implements IProcessBase<UIDValueType, _ProcessSnapshot>
{
  private eventCallbacks = {
    [ProcessEventTypes.out]:
      [] as ProcessEventCallbacks[ProcessEventTypes.out][],
    [ProcessEventTypes.exit]:
      [] as ProcessEventCallbacks[ProcessEventTypes.exit][],
  };

  static INPUT_SYMBOL = 0;

  getExecutable(): Executable {
    return this.data.executable;
  }

  in(inputValue: string): void {
    const logContainsInputIndex: ProcessLog =
      this.data.stdout[this.data.stdout.length - 1];
    const inputMarker = logContainsInputIndex[logContainsInputIndex.length - 1];

    if (inputMarker !== ProcessBase.INPUT_SYMBOL) {
      return;
    }

    logContainsInputIndex[logContainsInputIndex.length - 1] = inputValue;
    this.eventCallbacks[ProcessEventTypes.out].forEach((eventCallback) => {
      eventCallback(logContainsInputIndex);
    });
  }

  out(_log: string | ProcessLog): void {
    const log: ProcessLog = Array.isArray(_log) ? _log : [_log];
    this.data.stdout.push(log);
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
    return this.data.result !== 0 && !!this.data.result;
  }

  exit(result: number): void {
    this.data.result = result;

    this.eventCallbacks[ProcessEventTypes.exit].forEach((eventCallback) => {
      eventCallback(result);
    });
  }
}
