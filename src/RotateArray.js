// https://leetcode.com/problems/rotate-array/description/

const repeat = n => [...Array(n)].map((_, i) => i)

export const rotateArray = (xs, k) =>
  [...xs.slice(-k), ...xs.slice(0, -k)]

// swap in place O(1) extra space
export const rotateArray2 = (xs, k) =>
  repeat(k * 2).reduce((direction, index) =>
    swap(
      xs,
      !(index % 2)
        ? xs.length - k - 1 - index / 2
        : xs.length - ~~(index / 2) - 1
      , 0
    )
    , true
  )

const swap = (xs, a, b) => {
  ;[xs[a], xs[b]] = [xs[b], xs[a]]
  return xs
}
