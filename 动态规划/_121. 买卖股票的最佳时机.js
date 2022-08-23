/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //贪心解法
    //初始化一个变量用来存放当前日期前最低股价
    let minPrice = prices[0]
    //再初始化一个变量存放当前日期内的最大收益
    let max = 0
    for(let i=0;i<prices.length;i++){
        //从第1天开始遍历，先更新最低价格
        minPrice = Math.min(minPrice,prices[i])
        //再比较得出最大收益
        max = Math.max(max,prices[i]-minPrice)
    }
    return max
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function(prices) {
    //动态规划解法，初始化一个二维数组dp
    let dp = [[]]
    //dp[i][0]代表如果第i天还持有股票，我们身上的现金最大值，因为只能买卖一次，如果持有股票，我们肯定是亏钱的
    //身上的现金一定是负的，初始状态下就是-prices[0]
    dp[0][0] = -prices[0]
    //dp[i][1]表示如果第i天不持有股票（可能是卖了，也可能是还没买入过），身上所持有的现金最大值
    //初始状态肯定是没买过股票，所以是0
    dp[0][1] = 0
    //接下来从不第2天开始遍历推导
    for(let i=1;i<prices.length;i++){
        dp[i] = []
        //第i天如果还持有股票，可能有两种情况：
        //1.股票之前就已经买了，一直是持有状态，那么就和前一天的值dp[i-1][0]相等
        //2.股票今天才买，那么持有现金就是0-price[i]
        //我们取这两个值的最大值，作为到第i天位置如果持有股票身上现金的最大值
        dp[i][0] = Math.max(dp[i-1][0],-prices[i])
        //第i天如果不再持有股票了，也有两种情况：
        //1.股票之前就已经卖出了，那么就和前一天的值dp[i-1][0]相等
        //2.股票是当天卖出的，那么我们就要计算卖出当天股价后身上的金额，
        //首先取i-1天持有股票时身 上的现金，也就是dp[i-1][0],加上今天的股价prices[i]就得到了今天卖出股票以后身上的现金了
        //同样去这两者的最大值就是第i天不再持有股票时身上的现金
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]+prices[i])
    }
    //股票一定要卖掉，不然我们身上的现金一定是负的，所以我们取最后一天不持有股票状态的现金最大值，就是要求的解
    return dp[prices.length-1][1]
};
