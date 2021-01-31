// 选择排序
export default function selectionSort(originalArray) {
  const array = [...originalArray]
  for (let i = 0; i < array.length; i += 1) {
    let minIndex = i

    for (let j = i + 1; j < array.length; j += 1) {
      // 稳定排序：相同大小不移动元素
      if (array[j] < array[minIndex]) minIndex = j
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
  }
  return array
}
