import { Compare, defaultCompare } from '../util/index.js'
import { Node } from './models/node.js'
import Stack from '../stack/stack-obj.js'
import Queue from '../queue/queue-obj.js'

export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = null
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  // 辅助插入函数
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_EQUAL) {
      node.left === null
        ? node.left = new Node(key)
        : this.insertNode(node.left, key)
    } else {
      node.right === null
        ? node.right = new Node(key)
        : this.insertNode(node.right, key)
    }
  }

  // 中序遍历
  // 左节点，节点本身，右节点
  // 回调函数用来定义我们对遍历到的每个节点进行的操作
  // cb: console.log
  inOrderTraverse(cb) {
    this.inOrderTraverseNode(this.root, cb)
  }

  // 辅助中序遍历函数
  inOrderTraverseNode(node, cb) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, cb)
      // 执行遍历操作，例如输出内容
      cb(node.key)
      this.inOrderTraverseNode(node.right, cb)
    }
  }

  // 先序遍历
  // 节点本身，然后左节点，最后右节点
  preOrderTraverse(cb) {
    this.preOrderTraverseNode(this.root, cb)
    // this.preOrderTraverseNodeStack(this.root, cb)
  }

  preOrderTraverseNode(node, cb) {
    if (node !== null) {
      cb(node.key)
      this.preOrderTraverseNode(node.left, cb)
      this.preOrderTraverseNode(node.right, cb)
    }
  }

  // 非递归写法
  preOrderTraverseNodeStack(node, cb) {
    const stack = new Stack()
    let curr = node

    while (curr !== null || !stack.isEmpty()) {
      // 迭代左节点，并入栈
      while (curr !== null) {
        cb(curr.key)
        stack.push(curr)
        curr = curr.left
      }

      // 如果没有左节点，则弹出栈顶节点，访问右节点
      if (!stack.isEmpty()) {
        curr = stack.pop().right
      }
    }
  }

  // 后序遍历
  // 左，右，节点本身
  postOrderTraverse(cb) {
    this.postOrderTraverseNode(this.root, cb)
  }

  postOrderTraverseNode(node, cb) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, cb)
      this.postOrderTraverseNode(node.right, cb)
      cb(node.key)
    }
  }

  // 层序遍历
  levelOrderTraverse(cb) {
    const queue = new Queue()
    queue.enqueue(this.root)

    while (!queue.isEmpty()) {
      const curr = queue.dequeue()
      cb(curr.key)
      if (curr.left !== null) queue.enqueue(curr.left)
      if (curr.right !== null) queue.enqueue(curr.right)
    }
  }

  min() {
    return this.minNode(this.root)
  }

  minNode(node) {
    let current = node
    while (current !== null && current.left !== null) {
      current = current.left
    }
    return current
  }

  max() {
    return this.maxNode(this.root)
  }

  maxNode(node) {
    let current = node
    while (current !== null && current.right !== null) {
      current = current.right
    }
    return current
  }

  // 查找key是否存在
  search(key) {
    return this.searchNode(this.root, key)
  }

  searchNode(node, key) {
    if (node === null) return false

    let ret
    switch(this.compareFn(key, node.key)) {
      case Compare.LESS_EQUAL:
         ret = this.searchNode(node.left, key)
        break
      case Compare.BIGGER_EQUAL:
        ret = this.searchNode(node.right, key)
        break
      default:
        ret = true
    }

   return ret
  }

  remove(key) {
    this.root = this.removeNode(this.root, key)
  }

  removeNode(node, key) {
    if (node === null) return null

    switch (this.compareFn(key, node.key)) {
      case Compare.LESS_EQUAL:
        node.left = this.removeNode(node.left, key)
        break
      case Compare.BIGGER_EQUAL:
        node.right = this.removeNode(node.right, key)
      default:
        if (node.left === null && node.right === null) {
          node = null
        } if (node.left === null) {
          node = node.right
        } if (node.right === null) {
          node = node.left
        } else {
          const aux = this.minNode(node.right)
          // 移除操作
          node.key = aux.key
          // 用右侧最小值替换原来的位置
          node.right = this.removeNode(node.right, aux.key)
        }
    }
    return node
  }
}

const bst = new BinarySearchTree()

const nodeList = [11, 7, 15, 5, 9, 13, 20, 3, 6, 8, 10, 12, 14, 18, 25]
const cb = console.log
nodeList.forEach(v => bst.insert(v))

console.log('先序：', '-'.repeat(30))
bst.preOrderTraverse(cb)
console.log('中序：', '-'.repeat(30))
bst.inOrderTraverse(cb)
console.log('后序：', '-'.repeat(30))
bst.postOrderTraverse(cb)
console.log('层序：', '-'.repeat(30))
bst.levelOrderTraverse(cb)
