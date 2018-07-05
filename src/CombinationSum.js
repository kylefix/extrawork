// https://leetcode.com/problems/combination-sum/description/

export const combinationSum = (xs, total) => {
  const matrix = [...Array(xs.length)].map(() => [...Array(total + 1)])
  const getCombinations = (slice, total) => {
    if (matrix[slice.length - 1][total] !== undefined) return matrix[slice.length - 1][total]
    if (slice.length === 1 && slice[0] === total) {
      matrix[slice.length - 1][total] = [total]
      return [total]
    }

    slice.forEach((value, index) => {
      matrix[index][total] =
        (matrix[index - 1] && (matrix[index - 1][total] !== undefined))
          ? [...matrix[index - 1][total]]
          : []
      if (total - xs[index] === 0) {
        matrix[index][total].push([total])
      } else if (total - xs[index] > 0) {
        const combos = getCombinations(slice.slice(0, index + 1), total - xs[index])
        if (combos.length) {
          matrix[index][total].push([xs[index]].concat(...combos))
        }
      }
    })
    return matrix[slice.length - 1][total]
  }
  return getCombinations(xs, total)
}
