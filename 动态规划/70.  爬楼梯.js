/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //这么写会超时，需要用记忆化搜索
    // if(n === 1 || n===0){
    //     return 1
    // }
    // return climbStairs(n-1) + climbStairs(n-2)
    //本题的目的是求到达n阶楼梯有多少方案，由于一次只能爬1阶或者2阶
    //我们可以得知，到达n阶可以从n-1阶再爬一阶或者n-2阶再爬2阶得到
    //所以n阶方案数等于n-2阶的方案数加上n-1阶的方案树，递推公式：f(n)=f(n-1)+f(n-2)
    //接下来我们用动态规划来实现，边界条件是0阶和1阶，均只有1种爬法
    let dp = [1,1]
    for(let i = 2;i<=n;i++){
        dp[i]=dp[i-2]+dp[i-1]
    }
    return dp[n]
};
