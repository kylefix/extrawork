
export const repeatedMatch = (seed, target) => {
  const repeatCount = Math.ceil(target.length / seed.length)

  return [1, 0].reduce((answer, n) =>
    seed.repeat(repeatCount + n).includes(target)
      ? repeatCount + n
      : answer
    ,
  -1
  )
}
