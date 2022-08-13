/**
 * 给定一个会议时间安排的数组 intervals ，每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi]，
 * 请你判断一个人是否能够参加这里面的全部会议。
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    //这题其实就是判断是否有重复区间的问题，用贪心解法即可
    //先根据结束时间（右边界）进行排序，然后遍历判断是否有左边界小于右边界，同时更新右边界的最大值
    if(!intervals.length){
        return true
    }
    intervals.sort((a,b) => a[1]-b[1])
    let right = intervals[0][1]
    for(let i=1;i<intervals.length;i++){
        const interval = intervals[i]
        if(interval[0] < right){
            return false
        }else{
            right = interval[1]
        }
    }
    return true
};
