import { type OnIncrementCallback } from './types'

export default class PercentageIncrementor {
  private achivementIncrement = 0
  private readonly onIncrementCallbacks: OnIncrementCallback[] = []

  constructor(private readonly incrementMax: number) {}

  increment(): void {
    this.achivementIncrement++
    this.onIncrementCallbacks.forEach((onIncrementCallback) => {
      onIncrementCallback({
        achivmentOnPercent: Math.floor(
          (100 / this.incrementMax) * this.achivementIncrement
        )
      })
    })
  }

  onIncrement(onIncrementCallback: OnIncrementCallback): void {
    this.onIncrementCallbacks.push(onIncrementCallback)
  }
}
