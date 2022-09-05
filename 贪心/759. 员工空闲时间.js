/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function(schedule) {
  //这题属于上下车问题，类似253.会议室II的解法
  let arr = []
  let ret = []
  //首先将schedule打平，得到一个区间数组arr
  for(let item of schedule){
    arr = [...arr,...item]
  }
  //初始化一个events数组，将arr转换为events
  //开始时间就+1，结束时间就-1
  let events = []
  for(let item of arr){
    events.push([item.start,1])
    events.push([item.end,-1])
  }
  //对events数据按时间进行升序排序，如果时间相同，开始时间在前，结束时间在后
  //因为[2,2]这样的区间我们不认为是一个空闲时间的有效区间
  events.sort((a,b) => {
    if(a[0] === b[0]){
      return b[1] - a[1]
    }else{
      return a[0] - b[0]
    }
  })
  //当前时间在工作的人数
  let cur = 0
  //当前时间是否是空闲区间
  let isRestTime = false
  //空闲区间开始时间和结束时间
  let start = 0,end = 0
  //遍历events数组
  for(let event of events){
    //修改当前cur
    cur += event[1]
    //如果当前cur===0,代表进入空闲时间区间，记录start
    if(cur === 0){
      isRestTime = true
      start = event[0]
    }else if(cur > 0 && isRestTime){
      //如果当前cur>0并且之前是在空闲区间，代表空闲区间结束了
      //记录end，并且构建区间push到ret中
      isRestTime = false
      end = event[0]
      ret.push(new Interval(start,end))
    }
  }
  return ret
};
