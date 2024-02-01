export async function wait(durationInMilliseconds: number): Promise<void> {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, durationInMilliseconds)
  })
}
