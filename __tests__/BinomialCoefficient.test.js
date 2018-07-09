import {binomialCoefficient} from '../src/DynamicProgramming/BinomialCoefficient'

test('example 1', () => {
  const n = 3
  const k = 2
  const answer = 3
  expect(binomialCoefficient(n, k)).toEqual(answer)
})

test('example 1', () => {
  const n = 4
  const k = 2
  const answer = 6
  expect(binomialCoefficient(n, k)).toEqual(answer)
})

test('example 1', () => {
  const n = 5
  const k = 2
  const answer = 10
  expect(binomialCoefficient(n, k)).toEqual(answer)
})

test('example 1', () => {
  const n = 1
  const k = 2
  const answer = 0
  expect(binomialCoefficient(n, k)).toEqual(answer)
})

test('example 1', () => {
  const n = 1
  const k = 0
  const answer = 0
  expect(binomialCoefficient(n, k)).toEqual(answer)
})

test('example 1', () => {
  const n = 1
  const k = 1
  const answer = 1
  expect(binomialCoefficient(n, k)).toEqual(answer)
})