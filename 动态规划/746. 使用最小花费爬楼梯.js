/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    //因为可以从第0级或第1级台阶开始爬，所以到达第0级和第1级的最小花费都是0，dp[0]=dp[1]=0
    let dp = [0,0]
    //从第2级开始到第cost.length级，因为到达cost.length才算到楼顶
    for(let i=2;i<=cost.length;i++){
        //可以从下标i−1使用cost[i−1]的花费达到下标i，或者从下标i-2使用cost[i−2]的花费达到下标i。
        //为了使总花费最小，dp[i] 应取上述两项的最小值，可以得出以下的递推公式：
        dp[i] = Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
    }
    //dp最后一项就是到达楼顶的花费
    return dp[cost.length]
};
