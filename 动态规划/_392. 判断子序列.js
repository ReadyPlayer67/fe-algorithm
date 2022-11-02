/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    //动态规划解法，其实就是求两个字符串的最长公共子序列长度是否等于s的长度，求最长公共子序列见1143题
    let m = s.length
    let n = t.length
    //初始化dp，dp[i][j]表示字符串s在[1,i]区间的子串和字符串t在[1,j]区间的子串，两者相同子序列的长度
    let dp = new Array(m+1).fill(0).map(x=>new Array(n+1).fill(0))
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            //i和j是从1开始的，所以s去i-1位，t取j-1位
            //如果s[i-1]等于t[j-1]，那么子序列长度就等于上一个区间的子序列长度+1
            if(s[i-1]===t[j-1]){
                dp[i][j] = dp[i-1][j-1]+1
            }else{
                //否则dp[i][j] 应该是 dp[i - 1][j] 和 dp[i][j - 1] 的最大值
                dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j])
            }
        }
    }
    //最后检查dp[m][n]是否等于m，也就是相同子串的长度是否等于s本身的长度
    return dp[m][n] === m
};

//双指针解法
var isSubsequence2 = function(s, t) {
    //定义一个指针i指向s的第0个字符
    let i=0
    //指针j指向t的第0个字符
    for(let j=0;j<t.length;j++){
        //遍历t，如果遇到相同的字符i就右移一位，准备检查下一个字符
        if(s[i]===t[j]){
            i++
        }
    }
    //当t遍历完以后，检查i是否等于s的长度，也就是i是否到达了字符串尾部，到达了s就是t的子序列
    return i === s.length
};

isSubsequence('abc','ahbgdc')
