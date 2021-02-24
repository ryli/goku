import { defaultCompare, Compare } from '../util/index.js'
import MinHeap from './min-heap.js'

export default class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = (a, b) => compareFn(b, a)
  }
}

const heap = new MaxHeap()

for (let i = 1; i < 10; i += 1) {
  heap.insert(i)
}

console.log(heap.toString())
console.log(heap.extract())
