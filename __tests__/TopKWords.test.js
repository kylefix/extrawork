import {topKWords} from '../src/TopKWords'

test('example 1', () => {
  const a = ["i", "love", "leetcode", "i", "love", "coding"]
  const k = 2
  const answer = ["i", "love"]
  expect(topKWords(a, k)).toEqual(answer)
})

test('example 2', () => {
  const a = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"]
  const k = 4
  const answer = ["the", "is", "sunny", "day"]
  expect(topKWords(a, k)).toEqual(answer)
})
