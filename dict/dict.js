/**
 * 散列
 */
import { defaultToString } from '../util/index.js'
import ValuePair from './models/value-pair'

export default class Dict {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = Object.create(null)
  }

  hasKey(key) {
    return this.table[this.toStrFn[key]] !== undefined
  }

  set(key, value) {
    if (key === undefined || key === null || value === undefined) return false

    this.table[this.toStrFn[key]] = new ValuePair(key, value)
    return true
  }

  remove(key) {
    if (!this.hasKey(key)) return false

    delete this.table[this.toStrFn[key]]
    return true
  }

  get(key) {
    const valuePair = this.table[this.toStrFn[key]]
    return valuePair.value
  }

  keyValues() {
    return Object.values(this.table)
  }

  keys() {
    return this.keyValues().map(valuePair => valuePair.key)
  }

  values() {
    return this.keyValues().map(valuePair => valuePair.value)
  }

  size() {
    return Object.keys(this.table).length
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.table = Object.create(null)
  }

  forEach(cb) {
    const valuePair = this.keyValues()
    for (let i = 0; i < valuePair.length; i++) {
      const result = cb(valuePair[i].key, valuePair[i].value)
      if (result === false) break
    }
  }

  toString() {
    if (this.isEmpty()) return ''

    const valuePair = this.keyValues()
    let str = `${valuePair[0].toString()}`

    for (let i = 1; i < valuePair.length; i++) {
      str += `${valuePair[i].toString()}`
    }

    return str
  }

}
