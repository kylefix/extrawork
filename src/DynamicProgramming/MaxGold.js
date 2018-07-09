const repeat = n => [...Array(n)]

export const maxGold = gold => {
  const cache = {}
  const n = gold.length
  const m = gold[0].length

  const inner = (i, j) => {
    const hash = [i, j].toString()

    if (i < 0 || i >= n || j >= m) return (cache[hash] = 0)

    return (cache[hash] = cache[hash] ||
      Math.max(
        inner(i + 1, j + 1),
        inner(i - 1, j + 1),
        inner(i, j + 1)
      ) + gold[i][j]
    )
  }

  return Math.max(
    ...repeat(n).map((_, i) => inner(i, 0))
  )
}
