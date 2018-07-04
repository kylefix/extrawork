import {MinStack} from '../src/MinStack'

test('Push one value assure it is the min', () => {
  const minStack = new MinStack()
  expect(minStack.push(3)).toBe(minStack)
  expect(minStack.getMin()).toBe(3)
})

test('Push several consecutive values and get min', () => {
  const minStack = new MinStack()
  minStack
    .push(-1)
    .push(-2)
    .push(-3)
  expect(minStack.getMin()).toBe(-3)
})

test('Push several reverse order consecutive values and get min', () => {
  const minStack = new MinStack()
  minStack
    .push(-3)
    .push(-2)
    .push(-1)
  expect(minStack.getMin()).toBe(-3)
})

test('Push several reverse order consecutive values, pop all and getMin', () => {
  const minStack = new MinStack()
  minStack
    .push(-3)
    .push(-2)
    .push(-1)
  minStack.pop().pop().pop()
  expect(minStack.getMin()).toBe(undefined)
})

test('Push several consecutive values, pop and get min', () => {
  const minStack = new MinStack()
  minStack
    .push(-1)
    .push(-2)
    .push(-3)
  minStack.pop().pop()
  expect(minStack.getMin()).toBe(-1)
})

test('Push several consecutive values, pop and get top', () => {
  const minStack = new MinStack()
  minStack
    .push(-1)
    .push(-2)
    .push(-3)
  minStack.pop()
  expect(minStack.top()).toBe(-2)
})

test('Push several consecutive values, pop all and get top', () => {
  const minStack = new MinStack()
  minStack
    .push(-1)
    .push(-2)
    .push(-3)
  minStack.pop().pop().pop()
  expect(minStack.getMin()).toBe(undefined)
})

test('The given example', () => {
  const minStack = new MinStack()
  minStack.push(-2)
  minStack.push(0)
  minStack.push(-3)
  expect(minStack.getMin()).toBe(-3)
  minStack.pop()
  expect(minStack.top()).toBe(0)
  expect(minStack.getMin()).toBe(-2)
})