/* Ugly numbers are numbers whose only prime factors are 2, 3 or 5.
The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the first 11 ugly numbers.
By convention, 1 is included.
Given a number n, the task is to find n’th Ugly number. */

export const uglyNumbers = target => {
  const uglies = [1]

  const factors = [
    {factor: 2, next: 2, index: 0},
    {factor: 3, next: 3, index: 0},
    {factor: 5, next: 5, index: 0}
  ]
  const allNexts = () => factors.map(factor => factor.next)

  const generate = () => {
    if (uglies.length === target) return uglies.pop()

    const nextValue = Math.min(...allNexts())
    uglies.push(nextValue)

    factors.forEach(factor => {
      if (factor.next !== nextValue) return
      factor.next = uglies[++factor.index] * factor.factor
    })

    return generate()
  }

  return generate()
}