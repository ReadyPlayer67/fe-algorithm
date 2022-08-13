/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //动态规划解法，dp[i]表示包括下标i之前的最大连续子序列和
    //初始值为nums[0]
    let dp = [nums[0]]
    for(let i=1;i<nums.length;i++){
        //递推公式：dp[i]有两种获得方式，dp[i-1]+nums[i]或者nums[i]（从头开始计算连续子数组和）
        //两者取最大值就是dp[i]的值
        dp[i] = Math.max(nums[i],dp[i-1]+nums[i])
    }
    //最后再所有dp[i]中找出最大的那个就是最大的连续子序列
    return Math.max(...dp)
};
