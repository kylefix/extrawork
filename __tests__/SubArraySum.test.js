import {subArraySum} from '../src/SubArraySum'

test('example 1', () => {
  const a = [1, 1, 1]
  const k = 2
  const answer = 2
  expect(subArraySum(a, k)).toEqual(answer)
})

test('example 2', () => {
  const a = [1, 2, 3, 4]
  const k = 3
  const answer = 2
  expect(subArraySum(a, k, 0, 4)).toEqual(answer)
})

