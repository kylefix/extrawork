import {mergeSorted} from '../src/MergeSorted'

test('two same size arrays', () => {
  const a = [10, 20, 30]
  const b = [19, 25, 33]
  const answer = [10, 19, 20, 25, 30, 33]
  expect(mergeSorted(a, b)).toEqual(answer)
})

test('the given example', () => {
  const nums1 = [1, 2, 3]
  const nums2 = [2, 5, 6]
  const answer = [1, 2, 2, 3, 5, 6]
  expect(mergeSorted(nums1, nums2)).toEqual(answer)
})

test('random big arrays', () => {
  const ITERATIONS = 3000
  const nums1 = [...Array(ITERATIONS)].map(() => ~~(Math.random() * ITERATIONS)).sort((a, b) => a - b)
  const nums1Copy = [...nums1]
  const nums2 = [...Array(ITERATIONS)].map(() => ~~(Math.random() * ITERATIONS)).sort((a, b) => a - b)
  expect(mergeSorted(nums1, nums2)).toEqual([...nums1Copy, ...nums2].sort((a, b) => a - b))
})
