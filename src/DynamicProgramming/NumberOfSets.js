// number of partitions of a set
// S(n + 1) = k*S(n, k) + S(n, k - 1)
// B(n) = Sum (i=1..n) S(n, i)

const range = (a, b) => [...Array(b - a)].map((_, i) => i + a)
const sigma = (start, end, fn) =>
  range(start, end + 1)
    .reduce((acc, i) => acc + fn(i))

export const numberOfSets = n => {
  const cache = {}

  const inner = (n, k) => {
    const hash = [n, k].toString()

    if (k === n || k === 1) return (cache[hash] = 1)
    if (k <= 0) return (cache[hash] = 0)

    return (cache[hash] = cache[hash] ||
      k * inner(n - 1, k) + inner(n - 1, k - 1)
    )
  }

  return sigma(1, n, i => inner(n, i))
}