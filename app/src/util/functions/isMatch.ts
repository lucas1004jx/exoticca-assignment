export const isMatch = (matchValue: string, text: string) => {
  const pattern = new RegExp(matchValue, 'gi')

  return pattern.test(text)
}
