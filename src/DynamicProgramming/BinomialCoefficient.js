// C(n, k) = C(n - 1, k) + C(n - 1, k - 1)

export const binomialCoefficient = (n, k) => {
  const cache = {}

  const inner = (n, k) => {
    const hash = [n, k].toString()

    if (k > n || k === 0) return (cache[hash] = 0)
    if (k === n) return (cache[hash] = 1)
    if (k === 1) return (cache[hash] = n)

    return (cache[hash] = cache[hash] ||
      inner(n - 1, k) + inner(n - 1, k - 1)
    )
  }

  return inner(n, k)
}
