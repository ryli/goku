/**
 * 双向链表
 */

import LinkedList from './linked-list.js'
import { DoublyNode } from './models/linked-list-models'
import { defaultEquals } from '../util/index.js'

export default class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined
  }

  insert(element, index) {
    if (index < 0 || index >= this.count) return false

    const node = new DoublyNode(element)
    let current = this.head

    if (index === 0) {
      if (this.head === undefined) {
        this.head = node
        this.tail = node
      } else {
        node.next = this.head
        current.prev = node
        this.head = node
      }
    } else if (index === this.count - 1) {
      current = this.tail
      current.next = node
      node.prev = current
      this.tail = node
    } else {
      const prev = this.getElementAt(index - 1)
      current = prev.next
      node.next = current
      prev.next = node
      current.prev = node
      node.prev = prev
    }
    this.count++
    return true
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) return

    let current = this.head

    if (index === 0) {
      this.head = current.next
      if (this.count === 1) {
        this.tail = undefined
      } else {
        this.head.prev = undefined
      }
    } else if (index === this.count - 1) {
      current = this.tail
      this.tail = current.prev
      this.tail.next = undefined
    } else {
      current = this.getElementAt(index)
      const prev = current.prev
      prev.next = current.next
      current.next.prev = prev
    }

    this.count --
    return current.element
  }
}
