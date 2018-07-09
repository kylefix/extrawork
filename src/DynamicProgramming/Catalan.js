// C(n+1) = Sum(i=0...n)(Ci*Cn)
/*
1) Count the number of expressions containing n pairs of parentheses which are
   correctly matched. For n = 3, possible expressions are
   ((())), ()(()), ()()(), (())(), (()()).

2) Count the number of possible Binary Search Trees with n keys

3) Count the number of full binary trees (A rooted binary tree is full if every vertex
  has either two children or no children) with n+1 leaves.
*/

const sum = arr => arr.reduce((acc, n) => acc + n)
const repeat = n => [...Array(n)]

export const catalan = target => {
  const cache = {0: 1}

  const inner = n => (cache[n] = cache[n] ||
    sum(
      repeat(n).map((_, i) =>
        inner(i) * inner(n - 1 - i)
      )
    )
  )

  return inner(target)
}
