/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    //这题和122.买卖股票的最佳时机II很类似，只不过多了一笔手续费
    let has = -prices[0]
    let notHas = 0
    for(let i=1;i<prices.length;i++){
        has = Math.max(has,notHas-prices[i])
        //我们只需在求第i天未持有股票状态时减去手续费即可
        notHas = Math.max(notHas,has+prices[i]-fee)
    }
    return notHas
};
