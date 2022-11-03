/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    //这题可以转换为背包问题，但是我想到的是递归+记忆化搜索
    //首先初始化dp，dp[i][j]表示用i~nums.length-1区间的数和等于当前target的表达式数目
    //由于target可以是负数，我们用一个对象而不是数组来存储
    let dp = new Array(nums.length).fill(-1).map(x=>{
        return {}
    })
    //开始递归，从最后一位下标开始往前推导，初始target就是最后要求的target
    return dfs(nums.length-1,target,nums,dp)
};

function dfs(i,target,nums,dp){
    //有缓存就读缓存
    if(dp[i][target]){
        return dp[i][target]
    }
    let ret = 0
    //递归终止条件，当下标为0时，检查+i或-i是否等于target，等于的话说明找到一种方法返回1，不等于就没找到，返回0
    //这里注意为什么不能写成ret = nums[i]===target||-nums[i]===target?1:0
    //因为有一个特殊数字0,如果target=0,nums[i]=0，+0和-0都满足等于target，此时ret就等于2，所以要写成下面的写法
    if(i === 0){
        ret = Number(nums[i] === target) + Number(-nums[i] === target)
    }else{
        //推导公式：因为每个数有两个选择+或者-
        //[1,1,1,1,1] target=3的方法数就等于 [1,1,1,1] target=3-1=2的方法数加上[1,1,1,1]，target=3+1=4的方法数
        ret = dfs(i-1,target+nums[i],nums,dp) + dfs(i-1,target-nums[i],nums,dp)
    }
    dp[i][target] = ret
    return ret
}

console.log(findTargetSumWays([0,0,0,0,0,0,0,0,1],1))
