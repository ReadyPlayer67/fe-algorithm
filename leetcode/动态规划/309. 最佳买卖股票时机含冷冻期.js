/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //这题相对于122题多了个冷冻期，状态转移方程就有了变化
    const len = prices.length
    //因为我们初始化了dp前两项，所以要加一个长度为1的边界情况处理
    if(len===1) return 0
    //初始化dp
    let dp = new Array(len).fill(0).map(x => {
        return new Array(2).fill(0)
    })
    //初始化dp[0],dp[1]，和之前一样dp[i][0]是当天持有股票身上的现金
    //dp[i][1]是当天持有股票时身上的现金
    dp[0][0] = -prices[0]
    dp[0][1] = 0
    dp[1][0] = Math.max(-prices[0],-prices[1])
    dp[1][1] = Math.max(dp[0][1],dp[0][0]+prices[1])
    for(let i=2;i<prices.length;i++){
        //这里有区别：因为存在一天的冷冻期，不可能出现卖完一只股票第二天就买入新的股票的情况
        //所以如果第i天发生了买入，前一天不能买，只能在 i-2 那天卖出，然后才可以买
        //所以要取dp[i-2][1]-prices[i]
        //这就是为什么循环要从i=2开始，并且要初始化dp前两项的原因了
        dp[i][0] = Math.max(dp[i-1][0],dp[i-2][1]-prices[i])
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]+prices[i])
    }
    return dp[len-1][1]
};
