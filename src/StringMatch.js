const range = (a, b) => [...Array(b - a)].map((_, i) => i + a)

// this is just bruteforce not optimal...
// rewrote it below
export const repeatedMatch = (seed, target) =>
  range(1, Math.ceil((target.length + seed.length) / seed.length) + 1)
    .reduce((result, timesToRepeat) => {
      if (~result) return result
      return seed.repeat(timesToRepeat).includes(target)
        ? timesToRepeat
        : -1
    },
    -1
    )

export const repeatedMatch2 = (seed, target) => {
  const repeatCount = Math.ceil(target.length / seed.length)

  return [1, 0].reduce((answer, n) =>
    seed.repeat(repeatCount + n).includes(target)
      ? repeatCount + n
      : answer
    ,
  -1
  )
}
