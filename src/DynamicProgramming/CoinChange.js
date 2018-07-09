const repeat = n => [...Array(n)]
const sum = (n, fn) => repeat(n).reduce((acc, _, i) => acc + fn(i), 0)

export const coinChange = (change, n) => {
  const cache = {}

  const inner = (n, k) => {
    const hash = [n, k].toString()

    if (n < 0) return 0
    if (n === 0) return 1

    return (cache[hash] = cache[hash] ||
      sum(k + 1, i => inner(n - change[i], i))
    )
  }

  return inner(n, change.length - 1)
}
