import { defaultCompare, Compare } from '../util/index.js'

export default class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    // 使用普通数组的二叉树节点
    this.heap = []
  }

  getLeftIndex(index) {
    return 2 * index + 1
  }

  getRightIndex(index) {
    return 2 * index + 2
  }

  // 父节点位置是 index / 2
  getParentIndex(index) {
    return index === 0 ? undefined : Math.floor((index - 1) / 2)
  }

  insert(value) {
    if (value !== null) {
      // 插入堆的底部叶节点
      this.heap.push(value)
      // 将这个值和它的父节点进行交换,直到父节点小于这个插入的
      this.siftUp(this.heap.length - 1)
      return true
    }
    return false
  }

  // 上移
  siftUp(index) {
    const { heap, compareFn } = this
    let parentIndex = this.getParentIndex(index)

    while (index > 0 && compareFn(heap[parentIndex], heap[index]) === Compare.BIGGER_EQUAL) {
      // 交换节点
      [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]]
      index = parentIndex
      parentIndex = this.getParentIndex(index)
    }
  }

  // 移除最小值
  extract() {
    if (this.isEmpty()) return undefined

    if (this.size() === 1) return this.heap.shift()

    const removed = this.heap.shift()
    this.siftDown(0)
    return removed
  }

  siftDown(index) {
    const { heap, compareFn } = this
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    const size = this.size()
    let current = index

    if (left < size && compareFn(heap[current], heap[left]) === Compare.BIGGER_EQUAL) {
      current = left
    }

    if (right < size && compareFn(heap[current], heap[right]) === Compare.BIGGER_EQUAL) {
      current = right
    }

    if (index !== current) {
      [heap[current], heap[index]] = [heap[index], heap[current]]
      this.siftDown(current)
    }
  }

  // 返回最小值
  findMin() {
    return this.isEmpty() ? undefined : this.heap[0]
  }

  size() {
    return this.heap.length
  }

  isEmpty() {
    return this.heap.length === 0
  }

  toString() {
    return this.heap.toString()
  }
}

// const heap = new MinHeap()

// for (let i = 10; i >= 0; i -= 1) {
//   heap.insert(i)
// }

// console.log(heap.toString())
// console.log(heap.extract())
