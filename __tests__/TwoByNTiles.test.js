import {twoByNTiles} from '../src/DynamicProgramming/TwoByNTiles'

test('example 1', () => {
  const k = 1
  const answer = 1
  expect(twoByNTiles(k)).toEqual(answer)
})

test('example 1', () => {
  const k = 2
  const answer = 2
  expect(twoByNTiles(k)).toEqual(answer)
})

test('example 1', () => {
  const k = 3
  const answer = 3
  expect(twoByNTiles(k)).toEqual(answer)
})

test('example 1', () => {
  const k = 4
  const answer = 5
  expect(twoByNTiles(k)).toEqual(answer)
})

