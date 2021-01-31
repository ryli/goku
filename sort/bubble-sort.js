// 冒泡排序
export default function bubbleSort(originalArray) {
  const array = [...originalArray]
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - i; j += 1) {
      // 稳定排序：相同大小不移动元素
      if (array[j] > array[j + 1]) {
        // 移动
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array
}
