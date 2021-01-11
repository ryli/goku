/**
 * node --experimental-modules  decimal-to-binary.js
 */
import Stack from './stack-obj.js'

function decimalToBinary(decNumber, base) {
  const remStack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let number = decNumber
  let rem
  let binaryString = ''

  if (base < 2 || base > 36) return ''

  while (number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }

  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()]
  }

  return binaryString
}

// 11101001
console.log(decimalToBinary(233, 2))
// 1010
console.log(decimalToBinary(10, 2))
// 1111101000
console.log(decimalToBinary(1000, 2))
// 11000011111111001
console.log(decimalToBinary(100345, 2))
// 303771
console.log(decimalToBinary(100345, 8))
// 187F9
console.log(decimalToBinary(100345, 16))
// 2BW0
console.log(decimalToBinary(100345, 35))
