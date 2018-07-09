import {coinChange} from '../src/DynamicProgramming/CoinChange'

test('example 1', () => {
  const change = [1, 2, 3]
  const k = 4
  const answer = 4
  expect(coinChange(change, k)).toEqual(answer)
})

test('example 1', () => {
  const change = [2, 5, 3, 6]
  const k = 10
  const answer = 5
  expect(coinChange(change, k)).toEqual(answer)
})
