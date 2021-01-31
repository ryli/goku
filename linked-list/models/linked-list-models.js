export class Node {
  constructor(element, next) {
    this.element = element
    this.next = next
  }
}

export class doublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}
