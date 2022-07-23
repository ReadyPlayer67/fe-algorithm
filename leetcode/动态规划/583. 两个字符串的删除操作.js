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
