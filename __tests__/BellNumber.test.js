import {bellNumber} from '../src/DynamicProgramming/BellNumber'

test('example 1', () => {
  const k = 2
  const answer = 2
  expect(bellNumber(k)).toEqual(answer)
})

test('example 1', () => {
  const k = 3
  const answer = 5
  expect(bellNumber(k)).toEqual(answer)
})

test('example 1', () => {
  const k = 4
  const answer = 15
  expect(bellNumber(k)).toEqual(answer)
})

test('example 1', () => {
  const k = 5
  const answer = 52
  expect(bellNumber(k)).toEqual(answer)
})