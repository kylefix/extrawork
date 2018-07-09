/*
What is a Bell Number?
Let S(n, k) be total number of partitions of n elements into k sets.
The value of n’th Bell Number is sum of S(n, k) for k = 1 to n.

 Bell(n) =  \sum_{k=0}^{n}S(n,k)

Value of S(n, k) can be defined recursively as, S(n+1, k) = k*S(n, k) + S(n, k-1)

1) It is added as a single element set to existing partitions, i.e, S(n, k-1)
2) It is added to all sets of every partition, i.e., k*S(n, k)

S(n, k) is called Stirling numbers of the second kind

First few Bell numbers are 1, 1, 2, 5, 15, 52, 203, ….

Bell Triangle
-------------
Then Bell(n, k) counts the number of partitions of the set {1, 2, …, n + 1}
in which the element k + 1 is the largest element that can be alone in its set.

For example, Bell(3, 2) is 3, it is count of number of partitions of {1, 2, 3, 4}
in which 3 is the largest singleton element.

// If this is first column of current row 'i'
If j == 0
   // Then copy last entry of previous row
   // Note that i'th row has i entries
   Bell(i, j) = Bell(i-1, i-1)

// If this is not first column of current row
Else
   // Then this element is sum of previous element
   // in current row and the element just above the
   // previous element
   Bell(i, j) = Bell(i-1, j-1) + Bell(i, j-1)

Use the bell triangle to compute the Nth Bell Number
*/

export const bellNumber = n => {
  const triangle = {'0,0': 1}

  const Bell = (i, j) => {
    const hash = [i, j].toString()

    return (triangle[hash] = triangle[hash] ||
      (j === 0
        ? Bell(i - 1, i - 1)
        : Bell(i - 1, j - 1) + Bell(i, j - 1))
    )
  }

  return Bell(n, 0)
}
