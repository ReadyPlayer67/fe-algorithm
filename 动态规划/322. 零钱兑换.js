/**
 * 动态规划实现最少零钱兑换问题
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
    //我的解法，画表格
    //先把硬币按照从小到大排序，以便之后从最小面额开始
    // coins.sort((a, b) => a - b)
    // let ret = []
    // for (let i = 0; i <= coins.length; i++) {
    //     ret.push([])
    //     for (let j = 0; j <= amount; j++) {
    //         if (i === 0) {
    //             ret[i][j] = Infinity
    //         } else if (j === 0) {
    //             ret[i][j] = 0
    //         } else {
    //             if (coins[i - 1] > j) {
    //                 ret[i][j] = ret[i - 1][j]
    //             } else {
    //                 ret[i][j] = Math.min(ret[i - 1][j], ret[i][j - coins[i - 1]] + 1)
    //             }
    //         }
    //     }
    // }
    // const result = ret[ret.length - 1][ret[0].length - 1]
    // return result === Infinity ? -1 : result
    //更好的方法，直接利用一个数组，数组的长度等于要找的金额，初始化时每个数组项都为无限大
    let dp = new Array(amount+1).fill(Infinity)
    //第0项默认值为1，表示0块钱用0个硬币凑
    dp[0] = 0
    //先遍历硬币面额，依次求出使用当前面额时的最佳方案
    for(let i=0;i<coins.length;i++){
        for(let j=1;j<=amount;j++){
            if(coins[i] <= j){
                //其实这里和画图表类似，只不过每次求到更小值会覆盖当前数组项，而不是像图表一样另起一行
                dp[j] = Math.min(dp[j], dp[j- coins[i]] + 1);
            }
        }
    }
    //如果当前项为初始值Infinity，表示误解，返回-1
    return dp[amount] === Infinity ? -1 : dp[amount]
};

// console.log(coinChange([2], 3))
console.log(coinChange([1, 2, 5,10],27))
