/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //区间问题一般都要先根据左边界或右边界排序，这里我们按照左边界从小到大排序
    let ret = []
    intervals.sort((a,b) => a[0]-b[0])
    //设置一个初始的左右边界，为第一个区间的左右边界
    let left = intervals[0][0]
    let right = intervals[0][1]
    //从第二个区间开始遍历
    for(let i=1;i<intervals.length;i++){
        //如果当前区间的左边界小于right，代表有重叠
        if(intervals[i][0] <= right){
            //更新right为right和当前区间右边界的最大值，继续检查下一个区间
            right = Math.max(right,intervals[i][1])
        }else{
            //如果未重叠，可以确定[left,right]为一个结果区间，push到结果中
            ret.push([left,right])
            //更新left和right为当前区间的左右边界
            left = intervals[i][0]
            right = intervals[i][1]
        }
    }
    //上面的循环没有push最后一个区间，最后要push一下
    ret.push([left,right])
    return ret
};
