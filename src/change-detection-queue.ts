import { type MaybeUndefined } from './primitives/fp/maybe'
import { type OnChangesDetectedCallback } from './types'

export default class ChangeDetectionQueue<Change> {
  private readonly callbacks = new Array<OnChangesDetectedCallback<Change>>()
  private timeOut: MaybeUndefined<NodeJS.Timeout> = undefined

  constructor(private readonly options: { debounceTime: number }) {}

  onChangesDetected(callback: OnChangesDetectedCallback<Change>): void {
    this.callbacks.push(callback)
  }

  registerChangeDetection(change: Change): void {
    if (this.timeOut != null) {
      clearTimeout(this.timeOut)
    }
    this.timeOut = setTimeout(() => {
      this.callbacks.forEach((callback) => {
        callback(change)
      })
      this.timeOut = undefined
    }, this.options.debounceTime)
  }
}
