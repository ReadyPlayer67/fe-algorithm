/**
 * 贪心实现无重叠区间
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    //这题和452.用最少数量的箭引爆气球类似
    if(!intervals.length) return 0
    let removed = 0
    //先按有边界进行升序排序
    intervals.sort((a,b)=>a[1]-b[1])
    //先初始化一个最大判断右边界，为第一个元素的右边界
    let biu = intervals[0][1]
    //之后从第1个元素开始遍历intervals
    for(let i=1;i<intervals.length;i++){
        //若该元素的左边界小于当前的右边界，说明两个元素有交集，应当删除该元素，removed+1
        if(intervals[i][0] < biu){
            removed++
        }else{
            //如果左边界大于等于右边界，说明没有交集，这个元素不用删，但是要把最大判断有边界改为当前元素的右边界
            biu = intervals[i][1]
        }
    }
    return removed
};
