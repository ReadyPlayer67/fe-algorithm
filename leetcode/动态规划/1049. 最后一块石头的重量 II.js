/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    //这道题可以转换为01背包问题，简单来说就是挑选i块石头，让他们的重量总和尽量接近所有石头重量总和的一半
    //这样和另一半对撞抵消的差值就能尽量小
    //计算所有石头重量的总和并且除以2向下取整，得到target重量，之后我们求一个尽量接近于target的重量即可
    let sum = stones.reduce((pre,cur)=>pre+cur,0)
    const target = sum>>1
    let len = stones.length
    //接下来就是01背包的处理流程，初始化二维dp数组
    let dp = new Array(len).fill(0).map(x=>new Array(target+1).fill(0))
    //外层循环是能用的石头下标
    for(let i=0;i<len;i++){
        //内层循环是当前重量总和（背包大小）
        for(let j=0;j<=target;j++){
            //第一行特殊处理
            if(i===0){
                if(stones[i]<=j){
                    dp[i][j] = stones[i]
                }
            }else{
                //之后的递推公式就是从选这块石头和不选这块石头的结果中取最大值
                if(stones[i]<=j){
                    dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-stones[i]]+stones[i])

                }else{
                    dp[i][j] = dp[i-1][j]
                }
            }
        }
    }
    //dp最后一行最后一列就是小于等于target的背包能装下的石头重量最大值
    let sum1 = dp[len-1][target]
    let sum2 = sum-sum1
    //用他减去另外一半石头的重量即可得到结果
    return Math.abs(sum1-sum2)
};
