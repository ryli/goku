
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
