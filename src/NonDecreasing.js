
export const nonDecreasing = xs =>
  (xs.reduce((count, x, index) =>
    index
      ? count + (x > xs[index - 1])
      : 0
  ) <= 1)
