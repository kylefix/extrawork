import {catalan} from '../src/DynamicProgramming/Catalan'

test('example 1', () => {
  const k = 0
  const answer = 1
  expect(catalan(k)).toEqual(answer)
})

test('example 1', () => {
  const k =  1
  const answer = 1
  expect(catalan(k)).toEqual(answer)
})

test('example 1', () => {
  const k = 7
  const answer = 429
  expect(catalan(k)).toEqual(answer)
})

test('example 1', () => {
  const k = 9
  const answer = 4862
  expect(catalan(k)).toEqual(answer)
})