
export const subArraySum = (xs, k) => {
  const cache = {}

  const inner = (start, end) => {
    const hash = [start, end].toString()

    return (
      (cache[hash] !== undefined) ? cache[hash] // memoization
        : (start === end) ? (cache[hash] = xs[start]) // base case
          : (cache[hash] = inner(start, end - 1) + inner(end, end)) // reduction
    )
  }

  xs.forEach((_, i) => inner(i, xs.length - 1))

  return countEqualTo(cache, k)
}

const countEqualTo = (obj, target) =>
  Object.values(obj).reduce((count, sum) =>
    count + (sum === target)
    , 0)

const sumDigits = x =>
  x.toString().split('').reduce((acc, n) => acc + +n, 0)

const reverse = str => [...str].reverse().join('')

