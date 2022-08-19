/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //这道题是拓扑排序的经典问题，我们可以根据课程依赖关系构造一个有向无环图，把一个有向无环图转换为线性的排序就叫拓扑排序
    //参考题解https://leetcode.cn/problems/course-schedule/solution/bao-mu-shi-ti-jie-shou-ba-shou-da-tong-tuo-bu-pai-/
    //我们需要两组数据来进行排序，一个是记录每门课程的入度数组
    let inDegree = new Array(numCourses).fill(0)
    //还要一个哈希表（邻接表）用来记录依赖关系，key:课程编号 value:依赖这门课的编号组成的数组
    let map = {}
    //首先遍历prerequisites生成入度数组和邻接表
    for(let pre of prerequisites){
        //pre[0]是课程号，pre[1]是他依赖的课程号
        //课程号的入度数+1
        inDegree[pre[0]]++
        //更新邻接表
        if(map[pre[1]]){
            map[pre[1]].push(pre[0])
        }else{
            map[pre[1]] = []
            map[pre[1]].push(pre[0])
        }
    }
    //开始进行广度优先遍历，初始化一个队列，存放的是当前能都上的课程
    //核心逻辑就是每次只选你能上的课（入度为0的课程）
    let queue = []
    //先将当前入度为0的课程push到队列中
    for(let i = 0;i<inDegree.length;i++){
        if(inDegree[i] === 0){
            queue.push(i)
        }
    }
    //当队列中有数据就进行循环
    while(queue.length){
        //弹出队列头部元素
        let index = queue.shift()
        //根据邻接表获取依赖这门课程的课程数组
        let arr = map[index]
        if(arr && arr.length){
            //遍历这个数组并更新入度数组
            for(let item of arr){
                inDegree[item]--
                //当发现某一门课的入度为0时，说明他可以上了，将他入队
                if(inDegree[item] === 0){
                    queue.push(item)
                }
            }
        }

    }
    //最后我们检查当前入度入组中是否还要入度>0的课程，有说明他还没法上，返回false
    return !inDegree.some(item => item > 0)
};
