/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    //递归+记忆化搜索版本
    let m = s.length
    let n = t.length
    //初始化缓存二维数组
    let dp = new Array(m+1).fill(0).map(x => new Array(n+1).fill(-1))
    //递归方法，参数分别是s,t,s当前下标，t当前下标（都是从最后一位开始），dp
    return process(s,t,m-1,n-1,dp)
};

function process(s,t,i,j,dp){
    //终止条件，如果j<0，代表t被匹配完了，说明找到了一个子序列，返回1
    if(j < 0){
        return 1
    }
    //另一个终止条件，如果j>=0且i<0说明s被匹配完了但t还没有匹配完，说明这是一个无效的尝试，返回0
    if(i < 0){
        return 0
    }
    //读缓存
    if(dp[i][j] !== -1){
        return dp[i][j]
    }
    let ans = 0
    //如果s和t都还没被匹配完，我们从他们的最后一位开始匹配，举例s=babgbag,t=bag 有两种情况
    //1.s[i] === t[j]，也就是说他们的最后一位字符相同，这时候我们也有两种选择：
    //  I.用s[i]去匹配t[j]，那么问题的规模就缩小了，接下来我们就只要匹配s[i-1]和t[j-1]即可，也就是匹配babgba和ba
    //  II.不用s[i]去匹配t[j]，跳过这一位，那么我们继续去匹配s[i-1]和t[j]，也就是babgba和bag
    //这是两种不同的方案，我们把他们加起来才是要求的方案数
    if(s[i] === t[j]){
        ans = process(s,t,i-1,j-1,dp) + process(s,t,i-1,j,dp)
    }else{
        //2.s[i] !== t[j]，那么我们没法用s[i]去匹配t[j]，只能拿s[i]之前的字符去匹配
        //也就是匹配s[i-1]和t[j]
        ans = process(s,t,i-1,j,dp)
    }
    dp[i][j] = ans
    return ans
}

//动态规划解法，可以由递归法推导而来
var numDistinct2 = function(s, t) {
    let m = s.length
    let n = t.length
    let dp = new Array(n+1).fill(0).map(x => new Array(m+1).fill(0))
    for(let i=0;i<=m;i++){
        dp[0][i] = 1
    }
    for(let i=1;i<=n;i++){
        for(let j=1;j<=m;j++){
            if(j>=j){
                if(t[i-1] === s[j-1]){
                    dp[i][j] = dp[i-1][j-1]+dp[i][j-1]
                }else{
                    dp[i][j] = dp[i][j-1]
                }
            }
        }
    }
    debugger
    return dp[n][m]
};

