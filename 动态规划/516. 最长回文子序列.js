/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    //暴力递归+缓存法
    const len = s.length
    let dp = new Array(len+1).fill(0).map(x=>new Array(len+1).fill(-1))
    return process(s,0,len-1,dp)
};
//递归函数，代表s字符串的第i位到第j位上最长回文子序列的长度
function process(s,i,j,dp){
    //如果i>j，说明越界了，长度直接返回0，会在 process(s,i+1,j-1,dp)+2的时候有可能出现
    if(i>j){
        return 0
    }
    //有缓存取缓存
    if(dp[i][j] !== -1){
        return dp[i][j]
    }
    //初始化长度为0
    let ans = 0
    //如果i===j，说明剩下的字符串长度为1，必定是一个回文字符串，返回长度1
    if(i===j){
        ans = 1
        //如果长度不为1，有两种情况，第一种s[i]===s[j]，首位字符相同
    }else if(s[i] === s[j]){
        //那么剩下字符串的最长回文子序列的长度加上这两个字符，也就是+2就等于当前最长回文子序列的长度
        ans = process(s,i+1,j-1,dp)+2
    }else{
        //另外一种情况，s[i]!==s[j]，说明它俩不可能同时出现在 s[i..j] 的最长回文子序列中，
        // 那么把它俩分别加入 s[i+1..j-1] 中，看看哪个子串产生的回文子序列更长即可
        ans = Math.max(process(s,i+1,j,dp),process(s,i,j-1,dp))
    }
    //存缓存
    dp[i][j] = ans
    return ans
}
