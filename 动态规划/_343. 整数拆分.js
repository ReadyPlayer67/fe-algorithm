/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    //初始化dp数组，dp[i]表示分拆数字i，可以得到的最大乘积，初始值都为0
    let dp = new Array(n+1).fill(0)
    //因为题目规定n>=2，给一个dp[2]=1的初始值
    dp[2] = 1
    //从i=3开始递推dp[i]
    for(let i=3;i<=n;i++){
        //我们定义一个数字j，用来拆分i，j从1开始一直到i-1
        for(let j=1;j<i;j++){
            //dp[i]可能有三种情况：
            //1.dp[i]其实就是上一次循环，也就是用j-1进行拆分得到的最大乘积
            //2.j*(i-j)就是把i拆分为两个数字j,i-j的乘积
            //3.j*dp[i-j]是j乘以拆分i-j得到的乘积最大值
            //比较这三者取最大值，就是dp[i]
            dp[i] = Math.max(dp[i],j*(i-j),j*dp[i-j])
        }
    }
    return dp[n]
};
