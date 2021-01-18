/**
 * 有序链表
 */
import { defaultEquals, defaultCompare, Compare } from '../util/index.js'
import { Node } from './models/linked-list-models'

export default class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn)
    this.compareFn = compareFn
  }

  insert(element) {
    if (this.empty()) return super.insert(element, 0)

    const pos = this.getIndexNextSortedElement(element)
    return super.insert(element, pos)
  }

  getIndexNextSortedElement(element) {
    let current = this.head
    let i = 0

    for (; i < this.size(); i++) {
      const comp = this.compareFn(element, current.element)

      if (comp === Compare.LESS_EQUAL) return i

      current = current.next
    }

    return i
  }
}
