import {maxGold} from '../src/DynamicProgramming/MaxGold'

test('example 1', () => {
  const k = [
    [1, 3, 3],
    [2, 1, 4],
    [0, 6, 4]
  ]
  const answer = 12
  expect(maxGold(k)).toEqual(answer)
})

test('example 1', () => {
  const k = [
    [1, 3, 1, 5],
    [2, 2, 4, 1],
    [5, 0, 2, 3],
    [0, 6, 1, 2]
  ]
  const answer = 16
  expect(maxGold(k)).toEqual(answer)
})

test('example 1', () => {
  const k = [
    [10, 33, 13, 15],
    [22, 21, 4, 1],
    [5, 0, 2, 3],
    [0, 6, 14, 2]
  ]
  const answer = 83
  expect(maxGold(k)).toEqual(answer)
})

