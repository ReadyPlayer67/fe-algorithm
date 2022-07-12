/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    //题目要求O(log n)的时间复杂度，考虑二分
    let left = 0
    let right = nums.length-1
    // 因为我们返回的是nums[left],若循环条件为while（left <= right)，
    // 则进入最后一个循环的时候，left = right = mid，都指向最小值，接着执行left = mid + 1。
    // 这时，left便跑到mid和right右边一位去了，因此若要用while(left <= right)条件必须返回 nums[right] 或者 nums[left - 1]
    while(left<right){
        debugger
        let mid = (right+left)>>1
        //如果中间项小于right，说明中间项右边都是递增的，最小项肯定不在右边
        //把范围缩小到中间项左边区域
        if(nums[mid]<nums[right]){
            right = mid
        }else if(nums[mid]>nums[right]){//如果中间项大于right，说明最小项在右边的区间，缩小范围到右边区域
            left = mid + 1
        }
    }
    //因为我们的循环条件是left<right，所以不会出现nums[mid]===nums[right]情况
    //当left和right相等时，循环会退出，此时nums[left]就是我们要找的元素
    return nums[left]
};

findMin([4,5,6,7,0,1,2])
