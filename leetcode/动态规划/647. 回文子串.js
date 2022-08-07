/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    //看到这种子串，子序列问题，自然而然地想到动态规划
    let len = s.length
    //dp[i][j]表示字符串i~j下标的区间内的子串是否是回文子串，默认都初始化为false
    let dp = new Array(len).fill(0).map(x=>new Array(len).fill(false))
    //定义一个result表示要求的回文子串数量
    let result = 0
    //因为递推公式依赖dp[i+1][j-1]，这个是dp[i][j]的左下角结果，所以我们需要从左下角开始遍历
    //也就是从下到上，从左到右画表格
    for(let i=len-1;i>=0;i--){
        for(let j=i;j<len;j++){
            //整体有两种情况，如果s[i]===s[j]，要分以下两种情况
            if(s[i] === s[j]){
                //1.i===j或i和j相差1，比如a或者aa，这时候肯定是回文字符串，dp[i][j] = true
                if(j-i <= 1){
                    dp[i][j] = true
                }else{
                    //2.i和j相差大于1，比如cabac，此时我们就需要判断aba是不是回文子串，如果是，那么dp[i][j]就是
                    //反之则dp[i][j]也不是回文字符串，所以我们得到递推公式dp[i][j] = dp[i+1][j-1]
                    dp[i][j] = dp[i+1][j-1]
                }
            }else{
                // 如果s[i]!==s[j]，那i~j区间肯定不是回文字符串
                dp[i][j] = false
            }
            //最后如果dp[i][j]===true代表我们找到了一个回文子串,result就+1
            dp[i][j] && result++
        }
    }
    return result
};
