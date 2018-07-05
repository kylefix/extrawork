import {validParens} from '../src/ValidParens'

test('example 1', () => {
  expect(validParens('()')).toBe(true)
})

test('example 2', () => {
  expect(validParens('()[]{}')).toBe(true)
})

test('example 3', () => {
  expect(validParens('(]')).toBe(false)
})

test('example 4', () => {
  expect(validParens('([)]')).toBe(false)
})

test('example 5', () => {
  expect(validParens('{[]}')).toBe(true)
})
