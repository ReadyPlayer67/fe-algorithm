/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    //这道题是一个完全背包问题，类似518.零钱兑换，只不过这题求的是排列总数，比如[1,2],[2,1]算两种方法
    //对于背包问题，求组合树外层循环是物品，内层循环是背包容量
    //求排列数的话就反过来，外层循环是背包容量，内层循环是物品
    //初始化1维dp数组，dp[i]的含义是target=i时的排列总数
    let dp = new Array(target+1).fill(0)
    //初始值dp[0]代表当target=0时什么都不用干，存在一种方法
    dp[0]=1
    //先遍历target，内层循环再遍历nums
    for(let i=0;i<=target;i++){
        for(let j=0;j<nums.length;j++){
            //如果当前target大于现在遍历的这个数字，我们此时就有两种情况得到target
            //1.选择该数字 2.不选择该数字，总的方法数就等于两种情况的和
            //选择该数字的方法数就是dp[i-nums[j]],也就是当前target-这个数字，剩下的数字的排列数，我们之前已经算好了
            //不选择该数字的方法数就是dp[i]，所以我们不断累加即可
            if(i>=nums[j]){
                dp[i] += dp[i-nums[j]]
            }
        }
    }
    return dp[target]
};
