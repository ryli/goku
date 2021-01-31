// 插入排序
export default function insertSort(originalArray) {
  const array = [...originalArray]
  for (let i = 0; i < array.length; i += 1) {
    // 退出条件
    for (let j = i; j > 0 && array[j - 1] > array[i]; j -= 1) {
      [array[i - 1], array[i]] = [array[i], array[i - 1]]
    }
  }
  return array
}
