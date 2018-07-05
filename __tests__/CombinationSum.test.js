import {combinationSum} from '../src/CombinationSum'

test('example 1', () => {
  const a = [2, 3, 6, 7]
  const k = 7
  const answer = [
    [7],
    [2, 2, 3]
  ]
  expect(combinationSum(a, k)).toEqual(answer)
})

test('example 1', () => {
  const a = [2, 3, 5]
  const k = 8
  const answer = [
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5]
  ]
  expect(combinationSum(a, k)).toEqual(answer)
})
