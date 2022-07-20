/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    //这题和392.判断子序列很类似，唯一的区别就在递推公式上
    let m = text1.length
    let n = text2.length
    //dp[i][j]表示长度为[0, i - 1]的字符串text1与长度为[0, j - 1]的字符串text2的最长公共子序列为dp[i][j]
    let dp = new Array(m+1).fill(0).map(x=>new Array(n+1).fill(0))
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            //如果text1[i-1],text2[j-1]相同，说明两个子字符串的最后一位相等，所以最长公共子序列又增加了1
            //所以 dp[i][j] = dp[i - 1][j - 1] + 1
            if(text1[i-1] === text2[j-1]){
                dp[i][j] = dp[i-1][j-1]+1
            }else{
                //当 text1[i - 1] != text2[j - 1]时，说明两个子字符串的最后一位不相等
                //那么此时的状态 dp[i][j] 应该是 dp[i - 1][j] 和 dp[i][j - 1] 的最大值
                //举个例子，比如对于ace和bc而言，他们的最长公共子序列的长度等于
                // ① ace和b的最长公共子序列长度0 与
                // ② ac和bc的最长公共子序列长度1 的最大值，即 1。
                dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j])
            }
        }
    }
    return dp[m][n]
};

console.log(longestCommonSubsequence('ace','abcde'))
