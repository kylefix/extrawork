const range = (a, b) => [...Array(b - a)].map((_, i) => i + a)

// this is just bruteforce not optimal...
// could probably just search for the seed inside the target and count how many time it is repeated
// and then concatenate the rest of the string together and make sure it is equal to seed
// then add the first number + 2 for the result unless it was a perfect match
export const repeatedMatch = (seed, target) =>
  range(1, Math.ceil((target.length + seed.length) / seed.length) + 1).reduce((result, timesToRepeat) => {
    if (~result) return result
    return seed.repeat(timesToRepeat).includes(target)
      ? timesToRepeat
      : -1
  }, -1)
