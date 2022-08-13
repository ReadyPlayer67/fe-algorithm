/**
 * 求最长连续递增的子序列[1,2,4,3,5] = 124长度为3
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function(nums) {
    //初始化一个数组dp，数组项dp[i]等于从nums[i]开始的最长连续递增子序列长度
    let dp = []
    //从第0项开始遍历nums
    for(let i=0;i<nums.length;i++){
        //初始化一个变量max代表当前的最长连续递增子序列长度，默认是1
        let max = 1
        //从第i项之后开始，继续往后遍历
        for(let j=i+1;j<nums.length;j++){
            //如果之后的每一项都比前一项大，max+1
            if(nums[j] > nums[j-1]){
                max++
            }else{
                //否则退出循环，最长连续递增子序列寻找完毕
                break
            }
        }
        //填充每一项的最长连续递增子序列长度
        dp[i] = max
    }
    //最后找出最大值，就是这个数组中最长连续递增子序列长度
    return Math.max(...dp)
};

const findLengthOfLCIS2 = (nums) => {
    //初始化一个数组，数组长度等于nums，dp[i]等于以下标i为结尾的数组的连续递增的子序列长度，初始值都是1
    //注意这里的定义，一定是以下标i为结尾，并不是说一定以下标0为起始位置
    let dp = new Array(nums.length).fill(1)
    for (let i = 0; i < nums.length; i++) {
        //递推公式，如果nums[i + 1] > nums[i]，
        //那么以 i+1 为结尾的数组的连续递增的子序列长度一定等于 以i为结尾的数组的连续递增的子序列长度 + 1，否则就从头开始，等于初始值1
        //这里和300题最长递增子序列有区别，本题要求的是连续的，所以不必再去遍历i之前的每一项j
        if(nums[i+1] > nums[i]){
            dp[i+1] = dp[i] + 1
        }
    }
    return Math.max(...dp)
}
findLengthOfLCIS2([1,3,5,4,7])
