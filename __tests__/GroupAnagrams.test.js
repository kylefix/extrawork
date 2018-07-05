import {groupAnagrams} from '../src/GroupAnagrams'

test('example 1', () => {
  const a = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
  const answer = [
    ['ate', 'eat', 'tea'],
    ['nat', 'tan'],
    ['bat']
  ]
  expect(groupAnagrams(a)).toEqual(answer)
})
