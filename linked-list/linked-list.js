/**
 * 链表
 */
import { defaultEquals } from '../util/index.js'
import { Node } from './models/linked-list-models'

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }

  // 向链表尾部添加元素
  push(element) {
    const node = new Node(element)

    if (this.head === undefined) {
      this.head = node
    } else {
      let current = this.head

      while (current.next !== undefined) {
        current = current.next
      }

      // 添加元素
      current.next = node
    }

    this.count++

    return true
  }

  insert(element, index) {
    if (index < 0 || index >= this.count) return false

    const node = new Node(element)

    if (index === 0) {
      const current = this.head
      node.next = current
      this.head = node
    } else {
      const prev = this.getElementAt(index - 1)
      const current = prev.next
      node.next = current
      prev.next = node
    }

    return true
  }

  getHead() {
    return this.head
  }

  getElementAt(index) {
    if (index < 0 || index >= this.count) return

    let node = this.head

    for (let i = 0; i < index && node !== undefined; i++) {
      node = node.next
    }

    return node
  }

  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) return

    let current = this.head

    if (index === 0) {
      this.head = current.next
    } else {
      const prev = this.getElementAt(index - 1)
      // 要移除的元素
      current = prev.next
      // 移除 current
      prev.next = current.next
    }

    this.count--

    return current.element
  }

  indexOf(element) {
    let current = this.head

    for (let i = 0; i < thi.count && current !== undefined; i++) {
      if (this.equalsFn(element, current)) return i

      current = current.next
    }

    return -1
  }

  isEmpty() {
    return this.count === 0
  }

  size() {
    return this.count
  }

  toString() {
    if (this.head === undefined) return ''

    let retString = `${this.head.element}`
    let current = this.head.next

    for (let i = 0; i < this.size() && current !== undefined; i++) {
      retString += `${current.element}`
      current = current.next
    }

    return retString
  }
}
