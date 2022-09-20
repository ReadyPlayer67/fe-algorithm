/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    //这道题可以转换为求一个最长子数组，要求子数组中0的个数小与等于k，因此可以用滑动窗口
    let left = 0
    let right = 0
    let ret = 0
    //记录当前子数组0的个数
    let zeros = 0
    //外层循环移动右边界
    while(right < nums.length){
        if(nums[right] === 0){
            zeros++
        }
        //如果zeros>k，就尝试移动左边界，指导zeros<=k
        while(zeros > k){
            if(nums[left] === 0){
                zeros--
            }
            left++
        }
        //计算窗口长度，并更新全局最大长度
        ret = Math.max(ret,right - left+1)
        right++
    }
    return ret
};
