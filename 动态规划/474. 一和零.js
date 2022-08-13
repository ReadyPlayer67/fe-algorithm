/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    //这道题还是挺难的，也是一个01背包问题，但是是三维的
    //之前的二维背包问题都是画一张表格，表格行是能够使用的物品，表格列是重量总和
    //但这题有了两个约束条件，0的数量不能大于m,n的数量不能大于n
    //所以我们要定义三维数组:dp[i][j][k] 表示输入字符串在子区间 [0, i] 能够使用 j 个 0 和 k 个 1 的字符串的最大数量
    let len = strs.length
    let dp = new Array(len+1).fill(0).map(x=>new Array(m+1).fill(0).map(x=> new Array(n+1).fill(0)))
    for(let i=1;i<=len;i++){
        //统计字符串中0和1的数量
        let countArr = countZeroOne(strs[i-1])
        for(let j=0;j<=m;j++){
            for(let k=0;k<=n;k++){
                //先把上一行拷过来，这样j<zeros或k<ones的时候就不用再写了
                dp[i][j][k] = dp[i-1][j][k]
                let zeros = countArr[0]
                let ones = countArr[1]
                //如果j>=zeros && k >= ones代表可以选或者不选这个字符串
                if(j>=zeros && k >= ones){
                    //不考虑选，数量就是dp[i−1][j][k]，考虑选了就是dp[i-1][j-zeros][k-ones]+1
                    dp[i][j][k] = Math.max(dp[i-1][j][k],dp[i-1][j-zeros][k-ones]+1)
                }
            }
        }
    }

    return dp[len][m][n]
};

function countZeroOne(str){
    let arr = [0,0]
    for(let char of str){
        arr[char-'0']++
    }
    return arr
}
