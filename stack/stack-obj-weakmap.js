/**
 * items在Stack类里是真正的私有属性。
 * Symbol 不行，因为可以通过 Object.getOwnPropertySymbols 获取属性
 * 采用这种方法，代码的可读性不强，而且在扩展该类时无法继承私有属性。
 */

const items = new WeakMap()

class Stack {
  constructor() {
    items.set(this, { count: 0, items: Object.create(null) })
  }

  push(element) {
    const stack = items.get(this)

    stack.items[stack.count] = element
    stack.count++
  }

  pop() {
    const stack = items.get(this)

    if (this.isEmpty()) return undefined

    stack.count--
    const result = stack.items[stack.count]
    delete stack.items[stack.count]
    return result
  }

  peek() {
    const stack = items.get(this)

    if (this.isEmpty()) return undefined

    return stack.items[stack.count - 1]
  }

  clear() {
    const stack = items.get(this)

    stack.count = 0
    stack.items = Object.create(null)
  }

  size() {
    const stack = items.get(this)

    return stack.count
  }

  isEmpty() {
    const stack = items.get(this)

    return stack.count === 0
  }

  toString() {
    const stack = items.get(this)

    if (this.isEmpty()) return ''

    let result = `${stack.items[0]}`
    for (let i = 1; i < stack.count; i++) {
      result += `, ${stack.items[i]}`
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
