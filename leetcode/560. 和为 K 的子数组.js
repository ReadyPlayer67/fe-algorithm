/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    //暴力枚举
    let count = 0
    //枚举以i为结尾，j为开头的子数组和
    for(let i=0;i<nums.length;i++){
        let sum = 0
        for(j=i;j>=0;j--){
            sum += nums[j]
            if(sum === k){
                count++
            }
        }
    }
    return count
};

//前缀和+哈希表解法
//所谓前缀和，就是一个数组nums第0项到当前项的和：prefixSun[x]=nums[0]+nums[1]+...+nums[x]
//所以可以得到nums[i]+...nums[j]=prefixSum[j]-prefixSum[i-1]
//我们要求几种 i、j 的组合，使得从第 i 到 j 项的子数组和等于 k,其实就是求有多少组i,j的组合，满足prefixSum[j]−prefixSum[i−1]==k
//因为题目只要求组合数，不需要知道哪几种组合，我们可以用哈希表记录，key为前缀和的值，value为前缀和等于该值的前缀和数量
//这样遍历一遍数组就可以实现了
var subarraySum2 = function(nums, k) {
    let count = 0
    //初始化一个哈希表，注意我们要放入一个0:1表示前缀和为0出现了1次，这样边界情况才成立
    //nums=[1],k=1，我们要求prefixSum=0的次数，为1
    let map = {0:1}
    let prefixSum = 0
    //从0开始遍历数组
    for(let i=0;i<nums.length;i++){
        //记录当前项的前缀和
        prefixSum += nums[i]
        //检查map中是否存在值为prefixSum-k的前缀和，有的话就让count加上prefixSum-k前缀和的次数
        if(map[prefixSum-k]){
            count+=map[prefixSum-k]
        }
        //将当前前缀和存到map中
        if(map[prefixSum]){
            map[prefixSum]++
        }else{
            map[prefixSum]=1
        }

    }
    return count
};
