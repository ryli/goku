import LinkedList from './linked-list.js'
import print from './models/print.js'
import reverseN from './reverse-n.js'

// 翻转以 head 为起点的 n 个节点
export default function reverseBetween(head, m, n) {
  if (m === 1) return reverseN(head, n)

  head.next = reverseBetween(head.next, m - 1, n - 1)

  return head
}

const l = new LinkedList()
for (let i = 1; i < 10; i += 1) {
  l.push(i)
}
console.log(l.toString())

let newHead = reverseBetween(l.head, 2, 5)
print(newHead)
