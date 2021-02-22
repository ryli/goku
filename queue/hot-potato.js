/**
 * 击鼓传花
 */
import Queue from './queue-obj.js'

function hotPotato(elementsList, num) {
  const queue = new Queue()
  // 被淘汰的数据
  const eliminatedList = []

  elementsList.forEach(i => queue.enqueue(i))

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      // 模拟击鼓传花
      queue.enqueue(queue.dequeue())
    }
    eliminatedList.push(queue.dequeue())
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  }
}


const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const result = hotPotato(names, 27)
result.eliminated.forEach(name => console.log(`${name} 在击鼓传花游戏中被淘汰`))
console.log(`胜利者： ${result.winner}`)
