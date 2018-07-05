const PARENS = {
  '(': ')',
  '{': '}',
  '[': ']'
}
const OPENED = Object.keys(PARENS)

export const validParens = str => {
  const openParens = []

  return ![...str].some(ch =>
    OPENED.includes(ch)
      ? !openParens.push(ch)
      : PARENS[openParens.pop()] !== ch
  )
}
