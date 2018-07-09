const concat = (xs, ys) => [...xs, ...ys]
const mapRightFrom = (arr, n, fn) =>
  [...Array(n + 1)].map((_, i) => fn(arr[n - i], n - i))

const dpAlgorithm = ({baseCase, fn, initialArgs: [...initial]}) => {
  const cache = {}

  const cacheOrElse = (params, fn) =>
    (cache[params.toString()] = cache[params.toString()] || fn())

  const recursive = (...params) =>
    baseCase(...params)
      ? baseCase(...params)
      : cacheOrElse(params, () => fn(...params, recursive))

  return recursive(...initial)
}

export const subsetsSum = (set, sum) => {
  const baseCase = sum => {
    if (sum < 0) return []
    if (sum === 0) return [[]]
  }

  const fn = (sum, k, fn) =>
    mapRightFrom(set, k, (number, i) =>
      fn(sum - number, i - 1).map(subset => [number, ...subset])
    ).reduce(concat, [])

  return dpAlgorithm({
    baseCase,
    fn,
    initialArgs: [sum, set.length - 1]
  })
}
