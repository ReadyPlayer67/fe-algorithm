/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //这题和647.回文子串类似，都是求回文子串类问题，不过这题要求最长回文子串内容
    //所以我们如果发现当前下标i~j的子串是回文子串，要把使j-i差值最大的i，j记录下来
    let len = s.length
    if(len <= 1){
        return s
    }
    let dp = new Array(len).fill(0).map(x=>new Array(len))
    //初始化left，right作为回文子串的最大边界
    let left = Infinity
    let right = -Infinity
    for(let i=len-1;i>=0;i--){
        for(let j=i;j<len;j++){
            if(s[i] === s[j]){
                if(j-i<=1){
                    dp[i][j] = true
                }else{
                    dp[i][j] = dp[i+1][j-1]
                }
            }else{
                dp[i][j]= false
            }
            //如果是回文子串，就比较j-i和当前j-i的最大值
            if(dp[i][j] && j - i > right-left){
                right = j
                left = i
            }
        }
    }
    //最后截取最大边界的字符串
    return s.slice(left,right+1)
};
