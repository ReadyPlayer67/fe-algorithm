/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // [1,2,3,4,5] k=2
    //三次旋转，首先将数组整体旋转[1,2,3,4,5] => [5,4,3,2,1]
    //再将前k个数组项和后面的数组项分别旋转 [5,4,3,2,1] => [4,5,3,2,1] => [4,5,1,2,3]
    //注意这里要将k%=nums.length，因为如果k>nums.length，其实除了k%nums.length剩下的旋转都是重复的，可以忽略
    k %= nums.length
    reverseNums(nums,0,nums.length-1)
    reverseNums(nums,0,k-1)
    reverseNums(nums,k,nums.length-1)
};

function reverseNums(nums,left,right){
    while(left < right){
        let tmp = nums[right]
        nums[right] = nums[left]
        nums[left] = tmp
        left++
        right--
    }
}
