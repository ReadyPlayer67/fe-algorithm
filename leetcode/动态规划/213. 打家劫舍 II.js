/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //这题是198.打家劫舍的变种，多了一个限制，第一个房子和最后一个房子不能同时偷
    //也就是说现在有两种选择，偷第一间屋子，最后一间不偷；不偷第一间屋子，偷最后一间s
    //我们对以上两种情况分别用198题的思路统计两种情况能偷的最大金额，最后比较这两个金额即最后要求的答案
    const len = nums.length
    //边界情况
    if(len === 1) return nums[0]
    if(len === 2) return Math.max(nums[0],nums[1])
    const ret1 = robRange(nums,0,len-2)
    const ret2 = robRange(nums,1,len-1)
    return Math.max(ret1,ret2)
};
//写一个方法，用来统计nums在start到end区间内的最大打劫金额
function robRange(nums,start,end){
    //边界情况
    if(start === end){
        return nums[start]
    }
    //利用两个数字滚动地存储前n-2和前n-1个房间能偷到的最大金额，节省空间
    let first = nums[start]
    let second = Math.max(nums[start],nums[start+1])
    let ret = 0
    for(let i=start+2;i<=end;i++){
        ret = Math.max(second,first+nums[i])
        first = second
        second = ret
    }
    return second
}
