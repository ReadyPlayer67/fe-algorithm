/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    //这题是300.最长递增子序列的扩展，不仅仅要求最长递增子序列的长度，还需要求最长递增子序列的个数
    //所以不仅需要dp[i]来记录nums数组i位置之前的最长递增子序列长度
    //还需要一个count[i]来记录i位置之前最长递增子序列的数量
    let dp = new Array(nums.length).fill(1)
    let count = new Array(nums.length).fill(1)
    //记录整个数组最长递增子序列长度
    let maxLength = 1
    //求最长递增子序列的双层遍历
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<i;j++){
            //如果nums[i]>nums[j]，i位置元素大于他前面的某个元素
            if(nums[i] > nums[j]){
                //如果dp[j]+1 > dp[i]，说明需要更新最长递增子序列的长度了
                if(dp[j]+1 > dp[i]){
                    //进行更新
                    dp[i] = dp[j]+1
                    //同时当前i位置最长递增子序列的个数就是j位置最长递增子序列的个数
                    //因为到j位置的最长递增子序列后面拼一个nums[i]就得到了当前的最长递增子序列
                    count[i]=count[j]
                    //更新全局最长递增子序列长度
                    maxLength = Math.max(dp[i],maxLength)
                }else if(dp[j]+1 === dp[i]){//如果dp[j]+1 === dp[i]，说明出现了另外一种情况也能凑成当前长度的最长递增子序列
                    //比如[1,3,2,5]，dp[3]=dp[1]+1=dp[2]+1=2，既可以从下标1拼5得到最长递增子序列
                    //同样可以从下标2拼5得到，count[i]就到把所以的情况累加起来，所以count[i]+=count[j]
                    count[i]+=count[j]
                }
            }
        }

    }
    let ret = 0
    //最后我们还需要遍历dp,根据全局最长递增子序列长度，找到有哪些dp[i]=maxLength
    //再将这些下标的count[i]累加起来
    for(let i=0;i<dp.length;i++){
        if(dp[i] === maxLength){
            ret+=count[i]
        }
    }
    return ret
};
