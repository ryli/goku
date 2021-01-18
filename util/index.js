export const Compare = {
  EQUAL: 0,
  LESS_EQUAL: -1,
  BIGGER_EQUAL: 1,
}

export function defaultEquals(a, b) {
  return a === b
}

export function defaultCompare(a, b) {
  if (a === b) return Compare.EQUAL

  return a < b ? Compare.LESS_EQUAL : Compare.BIGGER_EQUAL
}
