
export const mergeSorted = (target, origin) => {
  const sources = [{
    array: [...target],
    index: 0
  }, {
    array: origin,
    index: 0
  }]
  return mergeSources(target, sources)
}

const mergeSources = (target, sources, start = 0) => {
  if (sources.some(xs => xs.array.length === xs.index)) {
    // recursive base case
    // dumps the rest of the other array to the tail of target
    sources.some(xs =>
      (xs.index !== xs.array.length) &&
        target.push(...xs.array.slice(xs.index))
    )
    return target
  }

  sources.forEach((xs, index) => {
    const ys = sources[index ^ 1] // selects the other array
    ;(xs.array[xs.index] <= ys.array[ys.index]) &&
      (target[start++] = xs.array[xs.index++])
  })

  return mergeSorted(target, sources, start)
}
