/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    //贪心解法，局部最优解就是优先翻转绝对值最大的数，最后如果k>0，就找绝对值最小的数进行翻转
    //所以首先对nums安装绝对值从大到小排序
    nums.sort((a,b)=>Math.abs(b)-Math.abs(a))
    let sum = 0
    for(let i=0;i<nums.length;i++){
        //遍历nums，如果k>0并且当前元素是负数，就翻转，并且k--
        if(k>0 && nums[i] < 0){
            nums[i] = -nums[i]
            k--
        }
        //不论是否翻转，sum都要加上nums[i]进行求和计算
        sum += nums[i]
    }
    //如果翻转完了所有负数k还是大于0
    if(k>0){
        //如果k是偶数啥都不用干了，一个数翻转偶数次还是他本身
        if(k%2 === 1){
            //如果k是奇数，最后肯定要翻转一次，这时候sum就要减去绝对值最小的数的两倍
            //因为我们在上面的循环里已经加过一次了，不加反减了，需要减去两倍nums[nums.length-1]
            sum = sum - nums[nums.length-1]*2
        }
    }
    return sum
};
