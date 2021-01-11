
export default class Queue {
  constructor() {
    this.count = 0
    // 用来追踪第一个元素
    this.lowestCount = 0
    this.items = Object.create(null)
  }

  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }

  dequeue() {
    if (this.isEmpty()) return

    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]

    // 这里不处理 count，因为可以通过 count 和 lowestCount 比较来判断长度
    this.lowestCount++

    return result
  }

  peek() {
    if (this.isEmpty()) return
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
}


const queue = new Queue()
// true
console.log(queue.isEmpty())
queue.enqueue('John')
queue.enqueue('Jack')
// John, Jack
console.log(queue.toString())
// 2
console.log(queue.size())
queue.dequeue()
// 1
console.log(queue.size())
// Jack
console.log(queue.peek())
