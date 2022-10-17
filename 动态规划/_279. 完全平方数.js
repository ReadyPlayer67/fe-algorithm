/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    //这道题意思就是给你一堆完全平方数，取任意次凑到n，问最少用几个数字，其实就是一道完全背包问题，和322.零钱兑换一个道理
    //初始化dp数组，长度为n+1，因为我们要求最小值，初始每一项的值都为Infinity
    let dp = new Array(n+1).fill(Infinity)
    //当n=0时，不存在解，所以等于0
    dp[0] = 0
    //遍历物品，再遍历背包，外层循环的终止条件是i的平方小于等于n
    for(let i=1;i*i<=n;i++){
        for(let j=1;j<=n;j++){
            //如果当前数字大于等于i**2，可以比较当前最少的数字数，和选用了i**2后最少的数字，取最小值
            if(j >= i**2){
                dp[j] = Math.min(dp[j],dp[j-i**2]+1)
            }
        }
    }
    return dp[n]
};
