
const backwardsRange = (a, b) => [...Array(a - b)].map((_, i) => a - i)

export const waterfall = bars => {
  const water = [...Array(bars.length)].fill(0)
  let left = -1

  const fillAllWaterBetween = (start, end) => {
    bars.slice(start + 1, end).forEach((height, index) => {
      water[index + start + 1] = bars[end] - bars[index + start + 1]
    })
  }

  while (~(left = findFirstDecreasing(bars, ++left))) {
    const right = findFirstIncreasing(bars, left)
    if (!~right) break
    const furthestLeft = findFirstLargerThan(bars, right)
    if (!~furthestLeft) break
    fillAllWaterBetween(furthestLeft, right)
  }

  return sum(water)
}

const sum = xs => xs.reduce((acc, x) => acc + x)

const findFirstLargerThan = (xs, start) =>
  start - backwardsRange(start, 0).findIndex(i =>
    xs[i] > xs[start]
  )

const findFirstDecreasing = (xs, start) => {
  const index = xs.slice(start).findIndex((x, i) =>
    i > 0
      ? x < xs[start + i - 1]
      : false
  )
  return ~index
    ? start + index
    : -1
}

const findFirstIncreasing = (xs, start) => {
  const index = xs.slice(start).findIndex((x, i) =>
    i > 0
      ? x > xs[start + i - 1]
      : false
  )

  return ~index
    ? start + index
    : -1
}
