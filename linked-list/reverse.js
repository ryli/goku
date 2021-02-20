import LinkedList from './linked-list.js'
import print from './models/print.js'

// 将 node 为起点的链表翻转，并返回反转之后的头节点
export default function reverse(head) {
  console.log('start', head.element)
  if (head.next === undefined) {
    console.log('*'.repeat(30), head.element)
    return head
  }

  const last = reverse(head.next)

  console.log('head', head.element)
  print(head)

  console.log('last', last.element)
  print(last)

  head.next.next = head
  head.next = undefined

  print(last)
  console.log('-'.repeat(30), head.element, last.element)
  return last
}

const l = new LinkedList()
for (let i = 1; i < 10; i += 1) {
  l.push(i)
}
// console.log(JSON.stringify(l.head, null, 2))
print(l.head)

let newHead = reverse(l.head)
// console.log(JSON.stringify(newHead, null, 2))
print(newHead)
