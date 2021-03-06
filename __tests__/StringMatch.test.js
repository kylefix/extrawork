import {repeatedMatch, repeatedMatch2} from '../src/StringMatch'

test('Same string', () => {
  expect(repeatedMatch('abc', 'abc')).toBe(1)
})

test('Easy repeated string', () => {
  expect(repeatedMatch('abc', 'abcabc')).toBe(2)
})

test('Example given', () => {
  expect(repeatedMatch('abcd', 'cdabcdab')).toBe(3)
})

test('Longer example', () => {
  expect(repeatedMatch('abcde', 'eabcdeabcdeabcdeabcd')).toBe(5)
})

test('Same string', () => {
  expect(repeatedMatch2('abc', 'abc')).toBe(1)
})

test('Easy repeated string', () => {
  expect(repeatedMatch2('abc', 'abcabc')).toBe(2)
})

test('Example given', () => {
  expect(repeatedMatch2('abcd', 'cdabcdab')).toBe(3)
})

test('Longer example', () => {
  expect(repeatedMatch2('abcde', 'eabcdeabcdeabcdeabcd')).toBe(5)
})

