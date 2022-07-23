/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    //这题可以转化为1143.最长公共子序列 问题，求word1和word2的最长公共子序列长度len
    //word1和word2的长度分别减去len就是要删除的步数
    let m = word1.length
    let n = word2.length
    let dp = new Array(m+1).fill(0).map(x=>new Array(n+1).fill(0))
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(word1[i-1] === word2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1
            }else{
                dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j])
            }
        }
    }
    const len = dp[m][n]
    return m - len + n - len
};

//不转化为最长公共子序列问题，正常做法
var minDistance = function(word1, word2) {
    let m = word1.length
    let n = word2.length
    //dp[i][j]表示word1的0~i位替换为word2的0~j位最小操作步数
    let dp = new Array(m+1).fill(0).map(x=>new Array(n+1).fill(0))
    //表格第0行，每一项等于当前列数，表示从i位的字符串变成0位需要删除i次
    for(let i=0;i<=n;i++){
        dp[0][i] = i
    }
    //表格第0列，每一项等于当前行数，表示从i位的字符串变成0位需要删除i次
    for(let i=0;i<=m;i++){
        dp[i][0] = i
    }
    //从第一行第一列开始填表格
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            //如果word1[i-1] === word2[j-1]，表示这一位不需要任何操作
            //总操作数就和之前的区间操作数，也就是dp[i-1][j-1]一样
            if(word1[i-1] === word2[j-1]){
                dp[i][j] = dp[i-1][j-1]
            }else{
                //如果word1[i-1] !== word2[j-1]，我们有三种可能的操作
                // (1)dp[i-1][j-1]，把最后两项都删掉，我们操作了两次，所以要+2
                // (2)dp[i][j-1]，删除word2最后一项，操作了一次，+1
                // (3)dp[i-1][j]，删除word1最后一项，操作了一次，+1
                //这三种操作的最小值就是我们在当前区间要做的最少的删除次数
                dp[i][j] = Math.min(
                    dp[i][j-1]+1,
                    dp[i-1][j]+1,
                    dp[i-1][j-1]+2
                )
            }
        }
    }
    return dp[m][n]
};
