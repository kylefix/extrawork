import {waterfall} from '../src/Waterfall'

test('example 1', () => {
  const a = [8, 9, 3, 4, 2, 8]
  const answer = 15
  expect(waterfall(a)).toEqual(answer)
})
