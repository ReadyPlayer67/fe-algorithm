/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    //dp[i][j]表示以下表i-1为结尾的nums1，和以下标j-1为结尾的nums2，他们的最长重复子数组长度
    let dp = new Array(nums1.length+1).fill(0).map(x=>new Array(nums2.length+1).fill(0))
    let res = 0
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            //如果当前下标数字相等，就等于两个数组前一个下标的dp[i-1][j-1]+1
            if(nums1[i-1] === nums2[j-1]){
                dp[i][j] = dp[i-1][j-1]+1
            }
            //我们要找到所有dp[i][j]中的最大值
            res = Math.max(dp[i][j],res)
        }
    }
    debugger
    return res
}

findLength([1,2,3,2,1],[3,2,1,4,7])
