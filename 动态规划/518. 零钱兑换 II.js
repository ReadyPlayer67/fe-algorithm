/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    //我的解法，二维数组解法,dp[i][j]表示使用i种面额的硬币凑j金额的钱最多能使用几种方法
    let dp = new Array(coins.length).fill(0).map(x=>new Array(amount+1).fill(0))
    for(let i=0;i<coins.length;i++){
        for(let j=0;j<=amount;j++){
            //凑金额0有一种方法
            if(j===0){
                dp[i][j] = 1
                continue
            }
            //只使用第一种硬币时，看金额能否整除硬币面额，能整除就用一种方法，否则就为0，凑不了
            if(i===0){
                dp[i][j] = j%coins[i] === 0 ?  1 : 0
                continue
            }
            //如果要凑的金额小于当前硬币面额，说明使用当前面额的硬币凑不了这个金额
            //凑的方法数就等于只使用上一种面额的方法，也就是dp[i-1][j]
            if(j<coins[i]){
                dp[i][j] = dp[i-1][j]
                continue
            }
            //递推公式，当前方法总数等于不使用coins[i]的方法总数加上dp[j - coins[i]]
            dp[i][j] = dp[i-1][j]+dp[i][j-coins[i]]
        }
    }
    return dp[coins.length-1][amount]
};

console.log(change(5,[1,2,5]))
