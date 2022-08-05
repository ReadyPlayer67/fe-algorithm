/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    //这道题可以转换为01背包问题：从数组中挑选数字，每个数字只能选一次，看能不能凑到和等于sum/2
    let len = nums.length
    //求出数组中数字总和sum
    let sum = nums.reduce((pre,cur)=>pre+cur,0)
    //如果sum为奇数，不可能实现，返回false
    if(sum%2===1){
        return false
    }
    const target = sum/2
    //初始化二维dp数组，行代表能够选择的数字，列代表当前target（背包容量），初始化dp[i][j]都为0
    //dp[i][j]代表选用0~i数字，和不超过当前target能够凑到的最大和（重量不超过背包容量能够凑到的最大价值，这里物品的重量和价值都是nums[i]）
    let dp = new Array(len).fill(0).map(x=>new Array(target+1).fill(0))
    for(let i=0;i<len;i++){
        for(let j=0;j<=target;j++){
            //第一行特殊处理，当只能选用一种物品时
            if(i === 0){
                //如果当前target>=nums[i]，可以用这个数字，dp[i][j] = nums[i]，否则就是0，不用操作
                if(j >= nums[i]){
                    dp[i][j] = nums[i]
                }
            }else{//填充dp数组
                //如果当前target>=nums[i]，就可以用背包问题的递归公式进行推导
                //取拿这个数字和不拿这个数字凑到的总和比较，取最大值
                if(j >= nums[i]){
                    dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-nums[i]]+nums[i])
                }else{
                    //否则只能选择不拿这个数字
                    dp[i][j] = dp[i-1][j]
                }
            }
        }
    }
    //最后我们要检查的是用所有数字是否能恰好凑到总和等于target，如果可以代表存在子集总和=sum/2，可以实现
    return dp[dp.length-1][target] === target
};



console.log(canPartition([1,5,11,5]))
