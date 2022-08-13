/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    //我的贪心解法，核心思想就是先找出出现次数最多的任务，任务后面跟上冷却时间，先铺满数组
    //比如[A,A,A,B,B,B,C]，冷却时间是2，A和B出现次数最多
    //所以我们先构造出这样的任务队列[A,B,-,A,B,-,A,B]然后再用其他任务填充这些空槽-
    //先初始化一个哈希表用来存放每个任务出现的次数
    let map = new Map()
    //maxCount代表出现次数最多的任务出现的次数
    let maxCount = 1
    for(let task of tasks){
        if(map.has(task)){
            let count = map.get(task)+1
            map.set(task,count)
            if(count > maxCount){
                //找出任务出现最多的次数
                maxCount = count
            }
        }else{
            map.set(task,1)
        }
    }
    //找出有多少个任务出现了maxCount
    let maxTask = 0
    for(let value of map.values()){
        if(value === maxCount){
            maxTask++
        }
    }
    //最后构造的任务队列是[A,B,-,A,B,-]再拼上[A,B]
    //还需要和tasks.length进行比较，取最大值，因为如果所有-空槽都被填满了还有任务没被处理
    //此时有没有冷却时间都无所谓了，tasks.length就是执行任务的最短时间
    return Math.max((n+1)*(maxCount-1)+maxTask,tasks.length)
};
