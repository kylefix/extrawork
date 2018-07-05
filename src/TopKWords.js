
export const topKWords = (words, k) => {
  const counts = {}
  words.forEach(word => {
    counts[word] = (counts[word] || 0) + 1
  })
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k).map(a => a[0])
}
