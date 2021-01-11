class Stack {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    if (this.isEmpty()) return
    return this.items.pop()
  }

  peek() {
    return this.isEmpty() ? undefined : this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items = []
  }
}

// test

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
