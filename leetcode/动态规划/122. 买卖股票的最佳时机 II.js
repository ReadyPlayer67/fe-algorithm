/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //贪心解法，因为可以交易多次，我们找出当天股价-前一天股价中是正数的，然后加上即可
    let ret = 0
    for(let i=1;i<prices.length;i++){
        ret += Math.max(0,prices[i]-prices[i-1])
    }
    return ret
};

//动态规格解法，这里采用了压缩空间的写法，将空间复杂度降为O(1)
var maxProfit2 = function(prices) {
    //dp[0][0]就是has,表示第i天如果持有股票的话身上的现金
    let has = -prices[0]
    //dp[0][1]就是notHas，表示第i天不持有股票的话身上的现金
    let notHas = 0
    for(let i=1;i<prices.length;i++){
        //递推公式和121题类似，唯一的不同在这里，121题因为只能买卖股票一次
        //所以第i天如果持有股票且是当天买入的股票，身上的现金=-prices[i]
        //而本题因为可以买卖多次，身上可能有之前赚的收益，所以应当是i-1天未持有股票时身上的现金，也就是notHas-prices[i]
        has = Math.max(has,notHas-prices[i])
        notHas = Math.max(notHas,has+prices[i])
    }
    //最后返回最后一天未持有股票时身上的现金
    return notHas
};
