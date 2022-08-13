/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    //暴力递归+缓存法
    let dp = new Array(s.length+1).fill(-1)
    //递归方法，第一个参数是把字符串分割成的数组，第二个参数i是从第i个位置到最后一位上存在的解码方法总数，第三个参数是缓存数组
    return dfs(s.split(''),0,dp)
};

function dfs(arr,i,dp){
    //如果有缓存，拿缓存
    if(dp[i] !== -1){
        return dp[i]
    }
    //如果i到达了边界，说明找到了一个有效的解，返回1，表示解的数量+1
    if(i === arr.length){
        return 1
    }
    //如果遇到了一个单独的字符‘0’，说明这种转换方式是无效的，返回0，重新进行转换，类似回溯
    if(arr[i] === '0'){
        return 0
    }
    //否则就可以切割1个字符，并递归地找i+1位置到最后一位存在的解
    let ret = dfs(arr,i+1,dp)
    //如果i+1不越界且切割出来的两个字符组成的数字小于27，这两个字符组成的数字就能转换为一个字母，是一个有效的解
    //ret就加上i+2位置到最后一位存在的解的数量
    if(i+1 < arr.length && Number(arr[i]+arr[i+1]) < 27){
        ret += dfs(arr,i+2,dp)
    }
    //存缓存
    dp[i] = ret
    return ret
}
//动态规划优化法
var numDecodings2 = function(s) {
    let arr = s.split('')
    //初始化dp，因为下面会用到dp[i+2]，初始长度要给到s.length+1，默认都是0，代表不存在这样分割的转换方法
    let dp = new Array(s.length+1).fill(0)
    //边界位置，如果i越界了，说明找到了一个合理解，返回1
    dp[arr.length] = 1
    for(let i=arr.length-1;i>=0;i--){
        //开始遍历，默认解是0
        let ret = 0
        //如果当前位字符是0，这样分割一定是不合理的，直接不用往下走了，解是0
        if(arr[i] !== '0'){
            //这些其实都是由上面的递归转换而来的dfs(arr,i+1,dp)=>dp[i+1]
            ret += dp[i+1]
            //如果切割两个字符得到的数字也合法且不越界
            if(i+1 < arr.length && Number(arr[i]+arr[i+1]) < 27){
                //dfs(arr,i+2,dp)=>dp[i+2]
                ret += dp[i+2]
            }
            dp[i] = ret
        }
    }
    return dp[0]
};

console.log(numDecodings2('06'))
