/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    //这题也是个经典的完全背包问题
    //核心原理是，我们检查0~i位的字符串s，遍历单词数组，当s的最后n位于单词相匹配
    //并且s除了最后n位之前的字符串的匹配结果，也就是dp[i-n]也是true，那么我们可以认为dp[i]此时为true
    let dp = new Array(s.length+1).fill(false)
    //初始化dp[0]=true,不然后面没法求解，都是false
    dp[0]=true
    //先遍历字符串，内层遍历单词
    for(let i=1;i<=s.length;i++){
        for(let j=0;j<wordDict.length;j++){
            //如果当前字符串长度大于单词长度，检查字符串的最后几位是否等于该单词
            if(i >= wordDict[j].length){
                if(s.slice(i-wordDict[j].length,i) === wordDict[j] && dp[i-wordDict[j].length]){
                    dp[i]=true
                }
            }
        }
    }
    return dp[s.length]
};
