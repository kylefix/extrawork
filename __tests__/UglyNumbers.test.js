import {uglyNumbers} from '../src/DynamicProgramming/UglyNumbers'

test('example 1', () => {
  const k = 7
  const answer = 8
  expect(uglyNumbers(k)).toEqual(answer)
})

test('example 1', () => {
  const k = 10
  const answer = 12
  expect(uglyNumbers(k)).toEqual(answer)
})
test('example 1', () => {
  const k = 15
  const answer = 24
  expect(uglyNumbers(k)).toEqual(answer)
})
test('example 1', () => {
  const k = 150
  const answer = 5832
  expect(uglyNumbers(k)).toEqual(answer)
})