/**
 * 动态规划实现最少零钱兑换问题
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
    //我的解法，画表格
    //先把硬币按照从小到大排序，以便之后从最小面额开始
    coins.sort((a, b) => a - b)
    let ret = []
    for (let i = 0; i <= coins.length; i++) {
        ret.push([])
        for (let j = 0; j <= amount; j++) {
            if (i === 0) {
                ret[i][j] = Infinity
            } else if (j === 0) {
                ret[i][j] = 0
            } else {
                if (coins[i - 1] > j) {
                    ret[i][j] = ret[i - 1][j]
                } else {
                    ret[i][j] = Math.min(ret[i - 1][j], ret[i][j - coins[i - 1]] + 1)
                }
            }
        }
    }
    const result = ret[ret.length - 1][ret[0].length - 1]
    return result === Infinity ? -1 : result
};

console.log(coinChange([2], 3))
// console.log(coinChange([1, 2, 5,10],27))
