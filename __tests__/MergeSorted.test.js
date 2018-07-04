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
