/**
 * 循环链表
 */

 import LinkedList from './linked-list.js'
import { Node } from './models/linked-list-models'
import { defaultEquals } from '../util/index.js'

export default class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }

  insert(element, index) {
    if (index < 0 || index >= this.count) return false

    const node = new Node(element)
    let current = this.head

    if (index === 0) {
      if (this.head === undefined) {
        this.head = node
        node.next = this.head
      } else {
        node.next = current
        // 最后的元素
        current = this.getElementAt(this.size() - 1)
        // 更新最后一个元素
        this.head = node
        current.next = this.head
      }
    } else {
      const prev = this.getElementAt(index - 1)
      node.next = prev.next
      prev.next = node
    }

    this.count++
    return true
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) return

    let current = this.head

    if (index === 0) {
      if (this.empty()) {
        this.head = undefined
      } else {
        const removed = this.head
        current = this.getElementAt(this.size() - 1)
        this.head = this.head.next
        current.next = this.head
        current = removed
      }
    } else {
      const prev = this.getElementAt(index - 1)
      current = prev.next
      prev.next = current.next
    }

    return current.element
  }
}
