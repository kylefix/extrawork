
export const twoByNTiles = n => {
  const cache = []

  const inner = n =>
    (cache[n] = cache[n] ||
      (n === 1 || n === 0
        ? 1
        : inner(n - 1) + inner(n - 2))
    )

  return inner(n)
}
