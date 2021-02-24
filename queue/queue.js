/**
 * 队列
 */

class Queue {
  constructor() {
    this.items = []
  }

  // 向队尾添加数据
  enqueue(element) {
    this.items.push(element)
  }

  // 移除第一个数据
  dequeue() {
    if (this.isEmpty()) return
    return this.items.shift()
  }

  // 返回第一个数据
  peek() {
    if (this.isEmpty()) return
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }

  size() {
    return this.items.length
  }

  toString() {
    return this.items.toString()
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
