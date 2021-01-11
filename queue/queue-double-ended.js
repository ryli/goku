/**
 * double-ended queue
 * 双端队列
 */
export default class Deque {
  constructor() {
    this.count = 0
    // 用来追踪第一个元素
    this.lowestCount = 0
    this.items = Object.create(null)
  }

  // 同 Queue.enqueue
  addBack(element) {
    this.items[this.count] = element
    this.count++
  }

  // 同 Queue.dequeue
  removeFront() {
    if (this.isEmpty()) return undefined

    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]

    // 这里不处理 count，因为可以通过 count 和 lowestCount 比较来判断长度
    this.lowestCount++

    return result
  }

  peekFront() {
    if (this.isEmpty()) return undefined
    return this.items[this.lowestCount]
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.count - this.lowestCount
  }

  clear() {
    this.count = 0
    this.lowestCount = 0
    this.items = Object.create(null)
  }

  toString() {
    if (this.isEmpty()) return ''

    let result = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      result += `, ${this.items[i]}`
    }
    return result
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.items[this.lowestCount] = element
    }
  }

  // 同 Stack.pop
  removeBack() {
    if (this.isEmpty()) return undefined

    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  // 同 Stack.peek
  peekBack() {
    if (this.isEmpty()) return undefined
    return this.items[this.count - 1]
  }

}

const deque = new Deque()
console.log(deque.isEmpty()) // true
deque.addBack('John')
deque.addBack('Jack')
console.log(deque.toString()) // John, Jack
deque.addBack('Camila')
console.log(deque.toString()) // John, Jack, Camila
console.log(deque.size()) // 3
console.log(deque.isEmpty()) // false
deque.removeFront() // John
console.log(deque.toString()) // Jack, Camila
deque.removeBack() // Camila
console.log(deque.toString()) // Jack
deque.addFront('John') // John
console.log(deque.toString()) // John, Jack
