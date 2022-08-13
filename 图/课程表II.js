/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    //这题和207.课程表类似，只是要求返回上课的顺序也就是路径
    let inDegree = new Array(numCourses).fill(0)
    let map = {}
    for(let pre of prerequisites){
        inDegree[pre[0]]++
        if(pre[1] in map){
            map[pre[1]].push(pre[0])
        }else{
            map[pre[1]]=[]
            map[pre[1]].push(pre[0])
        }
    }
    let queue = []
    //初始化一个路径
    let path = []
    for(let i=0;i<inDegree.length;i++){
        if(inDegree[i] === 0){
            queue.push(i)
        }
    }
    while(queue.length){
        let course = queue.shift()
        //每一次从队列中弹出一个入度为0的课程时，将这门课放到path里
        path.push(course)
        if(map[course] && map[course].length){
            for(let item of map[course]){
                inDegree[item]--
                if(inDegree[item]===0){
                    queue.push(item)
                }
            }
        }

    }
    //最后路径长度等于课程总数，代表找到了一条合理的顺序，否则返回空数组
    if(path.length === numCourses){
        return path
    }
    return []
};
