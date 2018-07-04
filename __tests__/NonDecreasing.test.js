import {nonDecreasing} from '../src/NonDecreasing'

test('example 1', () => {
  expect(nonDecreasing([4, 2, 3])).toEqual(true)
})

test('example 2', () => {
  expect(nonDecreasing([4, 2, 1])).toEqual(true)
})
