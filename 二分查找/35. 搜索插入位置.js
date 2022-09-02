/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //用二分查找nums中第一个大于等于target的位置索引
    let left = 0
    let right = nums.length-1
    while(left <= right){
        let mid = (left+right)>>1
        if(nums[mid] < target){
            left = mid + 1
        }else if(nums[mid] > target){
            right = mid - 1
        }else{
            return mid
        }
    }
    return left
};
