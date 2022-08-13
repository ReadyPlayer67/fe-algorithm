/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    //这题和560.和为K的子数组很类似，用前缀和+哈希表来解
    //只不过这里是判断i~j区间的子数组%k===0，也就是prefixSum[j]-prefixSum[i] % k === 0
    //根据同余定理，prefixSum[j]-prefixSum[i] % k === 0 等价于 prefixSum[j] % k === prefixSum[i] % k
    //所以这题我们以prefixSum % k的结果module作为哈希表的key，出现次数作为value
    //从数组第0项开始依次求前缀和，当在map中出现相同的module，就加上map[module]
    let map = {0:1}
    let prefixSum = 0
    let count=0
    for(let i=0;i<nums.length;i++){
        prefixSum += nums[i]
        let module = prefixSum % k
        //这里要注意，如果负数%k，得到的是负数，此时要把他加上k得到正的余数
        //比如-3 % 7 = -3, 4 % 7 = 4,-3 和 4应该记到一组里面，因为 4 - (-3) = 7, 7 % 7 = 0, 就得把-3 转成正数的余数4
        if (module < 0) {
            module += k;
        }
        if(module in map){
            count += map[module]
            map[module]++
        }else{
            map[module]=1
        }
    }
    return count
};
