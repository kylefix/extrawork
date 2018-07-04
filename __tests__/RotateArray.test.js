import {rotateArray, rotateArray2} from '../src/RotateArray'

test('two same size arrays', () => {
  const a = [1, 2, 3, 4, 5, 6, 7]
  const k = 3
  const answer = [5, 6, 7, 1, 2, 3, 4]
  expect(rotateArray(a, k)).toEqual(answer)
  expect(rotateArray2(a, k)).toEqual(answer)
})
