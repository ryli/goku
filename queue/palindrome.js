/**
 * 回文检查
 */
import DeQue from './queue-double-ended.js'

function palindromeChecker(aString) {
  if (!aString || typeof aString !== 'string') return false

  const deque = new DeQue()
  const lowerString = aString.toLowerCase()
  let isEqual = true
  let firstChar
  let lastChar

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString[i])
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront()
    lastChar = deque.removeBack()
    if (firstChar !== lastChar) isEqual = false
  }

  return isEqual
}

console.log('a', palindromeChecker('a'))
console.log('aa', palindromeChecker('aa'))
console.log('kayak', palindromeChecker('kayak'))
console.log('level', palindromeChecker('level'))
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'))
console.log('Step on no pets', palindromeChecker('Step on no pets'))
