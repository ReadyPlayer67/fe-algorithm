/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    //这题和583.两个字符串额度删除操作很类似
    let m = word1.length
    let n = word2.length
    let dp = new Array(m+1).fill(0).map(x=>new Array(n+1).fill(0))
    //把word1 0~i区间变成空字符串需要多少次操作
    for(let i=0;i<=n;i++){
        dp[0][i] = i
    }
    //把word2 0~i区间变成空字符串需要多少次操作
    for(let i=0;i<=m;i++){
        dp[i][0] = i
    }
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            //如果字符相同，不需要做任何操作，操作数不变
            if(word1[i-1] === word2[j-1]){
                dp[i][j] = dp[i-1][j-1]
            }else{
                //(1) dp[i-1][j-1]，即先将 word1 的前 4 个字符 hors 转换为 word2 的前 2 个字符 ro，然后将第五个字符 word1[4]（因为下标基数以 0 开始） 由 e 替换为 s
                //(2) dp[i][j-1]，即先将 word1 的前 5 个字符 horse 转换为 word2 的前 2 个字符 ro，然后在末尾补充一个 s，即插入操作
                //(3) dp[i-1][j]，即先将 word1 的前 4 个字符 hors 转换为 word2 的前 3 个字符 ros，然后删除 word1 的第 5 个字符
                dp[i][j] = Math.min(
                    dp[i][j-1]+1,
                    dp[i-1][j]+1,
                    dp[i-1][j-1]+1
                )
            }
        }
    }
    return dp[m][n]
};

console.log(minDistance("horse","ros"))
