/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    //这道题和53.最大子数组和有类似的地方，dp[i]表示以第i个元素为结尾的子数组最大的乘积
    //可以得到类似的递推公式：dp[i]=Math.max(nums[i],dp[i-1]*nums[i])，但是在这里是不对的
    //原因是如果nums[i]为负数，此时dp[i]应当等于i-1之前最小的子数组乘积乘以他，这样负负得正才能得到最大的dp[i]
    //所以我们这里要维护两个dp数组，一个记录当前的最大值，一个记录最小值
    //两个dp都放入一个nums[0]作为初始值
    let maxF = [nums[0]]
    let minF = [nums[0]]
    for(let i=1;i<nums.length;i++){
        //当nums[i]为正数时，maxF[i]=Math.max(nums[i],maxF[i-1]*nums[i])，最大正数乘以正数
        //当nums[i]为负数时，maxF[i]=Math.max(nums[i],minF[i-1]*nums[i])，最小负数乘以负数
        //简便起见，合在一起写了
        maxF[i] = Math.max(nums[i],maxF[i-1]*nums[i],minF[i-1]*nums[i])
        //同样的方法求当前的子数组乘积最小值
        minF[i] = Math.min(nums[i],maxF[i-1]*nums[i],minF[i-1]*nums[i])
    }
    //最后返回maxF数组中的最大值
    return Math.max(...maxF)
};
