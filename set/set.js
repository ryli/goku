
export default class Set {
  constructor(elements = []) {
    const items = Object.create(null)
    elements.forEach(v => items[v] = v)
    this.items = items
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  add(element) {
    if (this.has(element)) return false

    this.items[element] = element
    return true
  }

  delete(element) {
    if (!this.has(element)) return false

    delete this.items[element]
    return true
  }

  clear() {
    this.items = Object.create(null)
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    return Object.values(this.items)
  }

  // 并集
  union (otherSet) {
    return new Set([...this.values(), ...otherSet.values()])
  }

  // 交集
  intersection(otherSet) {
    const intersectionSet = new Set()

    this.values.forEach(v => {
      if (otherSet.has(v)) intersectionSet.add(v)
    })

    return intersectionSet
  }

  // 差集
  difference(otherSet) {
    const differenceSet = new Set()

    this.values().forEach(v => {
      if (!otherSet.has(v)) differenceSet.add(v)
    })

    return differenceSet
  }

  // 子集
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) return false

    return this.values().every(v => otherSet.has(v))
  }
}
