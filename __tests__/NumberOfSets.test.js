import {numberOfSets} from '../src/DynamicProgramming/NumberOfSets'

test('example 1', () => {
  const k = 2
  const answer = 2
  expect(numberOfSets(k)).toEqual(answer)
})

test('example 1', () => {
  const k = 3
  const answer = 5
  expect(numberOfSets(k)).toEqual(answer)
})

test('example 1', () => {
  const k = 4
  const answer = 15
  expect(numberOfSets(k)).toEqual(answer)
})

test('example 1', () => {
  const k = 5
  const answer = 52
  expect(numberOfSets(k)).toEqual(answer)
})