/**
 * 除了toString方法，我们创建的其他方法的复杂度均为O(1)
 */
export default class Stack {
  constructor() {
    this.count = 0
    this.items = Object.create(null)
  }

push(element) {
  this.items[this.count] = element
  this.count++
}

pop() {
  if (this.isEmpty()) return

  this.count--
  const result = this.items[this.count]
  delete this.items[this.count]
  return result
}

peek() {
  if (this.isEmpty()) return

  return this.items[this.count - 1]
}

clear() {
  this.count = 0
  this.items = Object.create(null)
}

size() {
  return this.count
}

isEmpty() {
  return this.count === 0
}

toString() {
  if (this.isEmpty()) return ''

  let result = `${this.items[0]}`
  for (let i = 1; i < this.count; i++) {
    result += `, ${this.items[i]}`
  }
  return result
}
}

const stack = new Stack()

// true
console.log(stack.isEmpty())

stack.push(5)
stack.push(8)

// 8
console.log(stack.peek())

stack.push(11)
// 3
console.log(stack.size())

stack.pop()
// 8
console.log(stack.pop())
// 1
console.log(stack.size())

stack.clear()
// 0
console.log(stack.size())
