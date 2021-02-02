// 插入排序
export default function insertSort(originalArray) {
  const array = [...originalArray]
  for (let i = 0; i < array.length; i += 1) {
    // 退出条件
    for (let j = i; j > 0 && array[j - 1] > array[j]; j -= 1) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]]
    }
  }
  return array
}
