export async function wait(durationInMilliseconds: number): Promise<void> {
  await new Promise<void>((resolve): void => {
    setTimeout((): void => {
      resolve()
    }, durationInMilliseconds)
  })
}
