/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    //滑动窗口+单调队列解法（leecode上运行该解法超时了，但是这就是官方解法）
    //初始化两个单调队列，max是从队头到队尾单调递减的，min则是单调递增的
    //这样就保证max[0]能获取到当前滑动窗口中的最大元素，min[0]能获取到最小的元素
    let max = [],min = []
    //初始化滑动窗口左右边界
    let left = 0,right = 0
    const len = nums.length
    let ret = 0
    //滑动右窗口
    while(right<len){
        //滑动右窗口时会向窗口中新增元素，所以要更新两个单调队列
        //如果max队列尾部元素小于nums[right]就弹出，保证其单调递增
        while(max.length && max[max.length-1] < nums[right]){
            max.pop()
        }
        max.push(nums[right])
        //min队列尾部小于nums[right]就弹出，保证其单调递减
        while(min.length && min[min.length-1] > nums[right]){
            min.pop()
        }
        min.push(nums[right])
        //通过单调队列能够方便地获取当前滑动窗口的最大元素和最小元素
        //检查他们的差值是否超过limit，如果超过了左边界需要右移
        while(max[0]-min[0]>limit){
            //如果左边界的元素等于当前窗口的最小值或最大值，需要更新单调队列，移除shift这个元素
            if(nums[left] === min[0]){
                min.shift()
            }
            if(nums[left] === max[0]){
                max.shift()
            }
            left++
        }
        //更新全局的子数组最大长度
        ret = Math.max(ret,right-left+1)
        right++
    }
    return ret
};
