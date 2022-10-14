/**
 * 在一个有序数组中找到指定项
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //二分查找固定公式
    let left = 0
    let right = nums.length-1
    while(left <= right){
        //使用位运算写法，等效于 Math.floor((left+right)/2)
        // let mid = (left+right)>>1
        //如果left和right都很大，可能会出现越界，下面这种写法更保险
        let mid = left + ((right-left)>>1)
        if(nums[mid] > target){
            right = mid - 1
        }else if(nums[mid] < target){
            left = mid + 1
        }else{
            return mid
        }
    }
    return -1
};
