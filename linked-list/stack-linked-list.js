/**
 * 用双向链表实现栈
 */

import DoublyLinkedList from './doubly-linked-list.js'

export default class Stack {
  constructor() {
    this.items = new DoublyLinkedList()
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    if (this.isEmpty()) return

    return this.items.removeAt(this.size() - 1)
  }

  peek() {
    if (this.isEmpty()) return

    return this.items.getElementAt(this.size() - 1).element
  }

  isEmpty() {
    return this.items.isEmpty()
  }

  size() {
    return this.items.size()
  }

  clear() {
    this.items.clear()
  }

  toString() {
    this.items.toString()
  }
}
