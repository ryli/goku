import Stack from '../stack/stack-obj.js'

export class Queue {
  constructor() {
    this.s1 = new Stack()
    this.s2 = new Stack()
  }

  enqueue(element) {
    this.s1.push(element)
  }

  dequeue() {
    if (this.isEmpty()) return

    this.peek()

    return this.s2.pop()
  }

  peek() {
    if (this.isEmpty()) return

    if (!this.s1.isEmpty()) {
      while (this.s1.size()) {
        this.s2.push(this.s1.pop())
      }
    }

    return this.s2.peek()
  }

  isEmpty() {
    return this.s1.isEmpty() && this.s2.isEmpty()
  }

  clear() {
    this.s1 = new Stack()
    this.s2 = new Stack()
  }

  size() {
    return this.s1.size() + this.s2.size()
  }

  toString() {
    if (this.isEmpty()) return ''

    if (!this.s2.isEmpty()) {
      while (this.s2.size()) {
        this.s1.push(this.s2.pop())
      }
    }

    return this.s1.toString()
  }
}

const queue = new Queue()
for (let i = 1; i < 10; i += 1) {
  queue.enqueue(i)
}
console.log(queue.toString())
queue.dequeue()
console.log(queue.toString())
queue.enqueue(10)
console.log(queue.toString())
queue.dequeue()
console.log(queue.toString())
