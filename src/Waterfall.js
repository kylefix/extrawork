const range = (a, b) => [...Array(b - a)].map((_, i) => a + i)
const backwardsRange = (a, b) => range(b, a + 1).reverse()
const compose = (...fns) => initial => fns.reduceRight((args, fn) => fn(args), initial)
const chain = (f, g) => x => f(g(x), x)
const arrayOf = (n, value) => [...Array(n)].fill(value)
const sum = xs => xs.reduce((acc, x) => acc + x)

export const waterfall = bars => {
  const water = arrayOf(bars.length, 0)

  const fillNextBarWith = end => i =>
    (water[i + 1] = bars[end] - bars[i + 1])

  const fillAllWaterBetween = (start, end) =>
    (!~start || !~end)
      ? false
      : (range(start, end).forEach(fillNextBarWith(end)), true)

  const fillAllWaterAt = compose(
    chain(
      fillAllWaterBetween,
      findFirstLargerThan(bars)
    ),
    compose(
      findFirstIncreasing(bars),
      findFirstDecreasing(bars)
    )
  )

  const fillAllWaterFrom = from =>
    fillAllWaterAt(from)
      ? fillAllWaterFrom(++from)
      : water

  const sumOfAllWaterFrom = compose(sum, fillAllWaterFrom)

  return sumOfAllWaterFrom(0)
}

const findFirstLargerThan = xs => start => {
  if (!~start) return -1

  return start - backwardsRange(start, 0).findIndex(i =>
    xs[i] > xs[start]
  )
}

const findFirstDecreasing = xs => start => {
  if (!~start) return -1

  const index = xs.slice(start).findIndex((x, i) =>
    i > 0
      ? x < xs[start + i - 1]
      : false
  )

  return ~index
    ? start + index
    : -1
}

const findFirstIncreasing = xs => start => {
  if (!~start) return -1

  const index = xs.slice(start).findIndex((x, i) =>
    i > 0
      ? x > xs[start + i - 1]
      : false
  )

  return ~index
    ? start + index
    : -1
}
