/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    //动态规划解法
    //先将数字拆分成字符串数组
    let arr = num+''.split('')
    //初始化dp数组,dp[i]表示第i位结尾的arr的翻译方案数，因为我们下面要用到dp[i-2]，所以我们初始化两项
    //dp[0]表示数字为空时有一种方案（为了后面的推导公式dp[2]=dp[0]+dp[1]成立），dp[1]表示只有一位数字时，只有一种翻译方案
    let dp = [1,1]
    //从两位数字以上开始推导，这里的i表示arr下标+1
    for(let i=2;i<=arr.length;i++){
        //检查如果最后两位是字符一起，是否是一个能翻译的数字
        let digit = Number(arr[i-2]+arr[i-1])
        //如果数字小于等于25，并且不包含前缀0，说明可以连在一起翻译
        if(digit<=25 && arr[i-2] !== '0'){
            //此时方案数就等于单独翻译的方案数(dp[i-1】) 加上 连在一起翻译的方案数(dp[i-2])
            dp[i] = dp[i-1]+dp[i-2]
        }else{
            //如果不能连在一起翻译，就等于上一位的方案数
            dp[i] = dp[i-1]
        }
    }
    //返回dp最后一位
    return dp[arr.length]
};
