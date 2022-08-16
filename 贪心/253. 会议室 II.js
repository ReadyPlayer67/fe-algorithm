/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    //这个问题可以转化为求同一时刻进行的最大会议的数量（上车下车问题）
    //我们初始化一个events数组，存放一个事件event
    //event[0]表示发生事件的时间，event[1]表示开会还是散会，开会+1，散会-1
    let events = []
    for(let interval of intervals){
        events.push([interval[0],1])
        events.push([interval[1],-1])
    }
    //之后我们对events按照时间进行排序，如果时间相同，散会在前开会在后
    //因为如果先开会后散会这个时间节点就会认为需要两个会议室，实际上一个就够了
    events.sort((a,b)=>{
        if(a[0]===b[0]){
            return a[1]-b[1]
        }else{
            return a[0]-b[0]
        }
    })
    //之后遍历events数组，开会cur+1,散会cur-1，然后我们统计全局出现过的最大cur就是需要的会议室数
    let ret = 0,cur=0
    for(let event of events){
        cur += event[1]
        ret = Math.max(ret,cur)
    }
    return ret
};
