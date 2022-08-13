/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //dp[i]代表前i间房屋能偷窃到的最高总金额
    //初始值，如果只有一间房，就偷窃该房屋
    let dp = [nums[0]]
    //如果有两间房，挑金额高的那间偷
    dp[1] = Math.max(nums[0],nums[1])
    for(let i=2;i<nums.length;i++){
        //1.偷窃第 k 间房屋，那么就不能偷窃第k−1间房屋，偷窃总金额为前k−2间房屋的最高总金额与第 k 间房屋的金额之和。
        //2.不偷窃第 k 间房屋，偷窃总金额为前k−1间房屋的最高总金额
        //这两个选项中取最大值就是前k间房能偷到的最大金额
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])
    }
    return dp[nums.length-1]
};
