import { defaultCompare, Compare } from '../util/index.js'

function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length
  // 构建最大堆
  buildMaxHeap(array, compareFn)

  while (heapSize > 1) {
    heapSize--
    [array[0], array[heapSize]] = [array[heapSize], array[0]]
    heapify(array, 0, heapSize, compareFn)
  }

  return array
}

function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn);
  }
  return array;
}

// 没有使用堆数据结构，而是使用它的逻辑来开发heapSort算法
function heapify(heap, index, size, compareFn) {
  const left = 2 * index + 1
  const right = 2 * index + 2
  let current = index

  if (left < size && compareFn(heap[current], heap[left]) === Compare.LESS_EQUAL) {
    current = left
  }

  if (right < size && compareFn(heap[current], heap[right]) === Compare.LESS_EQUAL) {
    current = right
  }

  if (index !== current) {
    [heap[current], heap[index]] = [heap[index], heap[current]]
    heapify(heap, current, size, compareFn)
  }
}

const array = [7, 6, 3, 5, 4, 1, 2]

console.log('Before sorting: ', array)
console.log('After sorting: ', heapSort(array))
