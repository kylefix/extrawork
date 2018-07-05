
export const groupAnagrams = words => {
  const groups = {}
  words.forEach(word => {
    const sorted = [...word].sort().join('')
    groups[sorted] = [...(groups[sorted] || []), word].sort()
  })
  return Object.values(groups).sort((a, b) => b.length - a.length)
}
