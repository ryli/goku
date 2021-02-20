export default function print(head) {
  let ret = ''

  while(head) {
    ret += head.element
    head = head.next
  }

  console.log(ret)
}
