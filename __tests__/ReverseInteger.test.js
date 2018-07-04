import {reverseInteger, reverseInteger2} from '../src/reverseInteger'

test('the example 1', () => {
  expect(reverseInteger(123456789)).toBe(987654321)
})
test('the example 2', () => {
  expect(reverseInteger(-123456789)).toBe(-987654321)
})
test('the example 3', () => {
  expect(reverseInteger(120000000000000000000)).toBe(21)
})

test('the example 1 with math', () => {
  expect(reverseInteger2(123456789)).toBe(987654321)
})
test('the example 2 with math', () => {
  expect(reverseInteger2(-123456789)).toBe(-987654321)
})
test('the example 3 with math', () => {
  expect(reverseInteger2(120000000000000000000)).toBe(21)
})