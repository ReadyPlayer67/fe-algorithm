/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    //这题其实就是1143.最长公共子序列的另一种说法
    //因为只要相同的数字相对顺序不变，连线就不会相交，所以只要求nums1和nums2的最长公共子序列即可，代码也是一模一样的
    let m = nums1.length
    let n = nums2.length
    let dp = new Array(m+1).fill(0).map(x=>new Array(n+1).fill(0))
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(nums1[i-1] === nums2[j-1]){
                dp[i][j] = dp[i-1][j-1]+1
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return dp[m][n]
};
