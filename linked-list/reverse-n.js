import LinkedList from './linked-list.js'
import print from './models/print.js'

let next
// 翻转以 head 为起点的 n 个节点
export default function reverseN(head, n) {
  if (n === 1) {
    // 记录第 n + 1 个节点
    next = head.next
    return head
  }

  // 以 head.next 为起点，反转前 n - 1 个节点
  const last = reverseN(head.next, n - 1)

  head.next.next = head
  // 让翻转之后的 head 节点和后面的节点连起来
  head.next = next

  return last
}

const l = new LinkedList()
for (let i = 1; i < 10; i += 1) {
  l.push(i)
}
// console.log(l.toString())

const newHead = reverseN(l.head, 4)
// print(newHead)
