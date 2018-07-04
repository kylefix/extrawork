export const reverseInteger = (a) =>
  Math.abs(a)
    .toString()
    .split('')
    .reverse()
    .join('') * Math.sign(a)

export const reverseInteger2 = (a) => {
  let x = Math.abs(a)
  let answer = 0
  while (x) {
    const dividedBy10 = x / 10
    x = Math.floor(dividedBy10)
    answer *= 10
    answer += dividedBy10 - x
  }
  return Math.round(answer * 10) * Math.sign(a)
}
