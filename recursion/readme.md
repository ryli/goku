# 递归

> 要理解递归，首先要理解递归。 ——佚名

每个递归函数都必须有基线条件，即一个不再递归调用的条件（停止点），以防止无限递归。

```js
function understandRecursion() {
  const recursionAnswer = confirm('Do you understand recursion? ')
  if (recursionAnswer) return true
  understandRecursion(recursionAnswer)
}

// 阶乘
function factorial(num) {
  if (num === 1 || num === 0) return 1
  return num * factorial(num -1)
}

function factorial(num, result = 1) {
  if (num === 1 || num === 0) return result
  return factorial(num - 1, num * result)
}

// 斐波那契
function fibonacci(length) {
  if (length === 0) return 0
  if (length === 1 || length === 2) return 1
  return fibonacci(length - 1) + fibonacci(length - 2)
}

// 避免重复计算
function fibonacciMemoization(length) {
  const fibonacci = (length, memo = [0, 1]) => memo[length] === undefined
    ? memo[length] = fibonacci(length - 1, memo) + fibonacci(length - 2, memo)
    : memo[length]
  return fibonacci(length)
}

```

函数调用自身，称为递归。

如果尾调用自身，就称为尾递归。
尾递归优化，防止栈溢出
  - 确保最后一步只调用自身
  - 把所有用到的内部变量改写成函数的参数

为什么要用递归？递归更快吗？
不，只是它的实现更简单，容易理解。
