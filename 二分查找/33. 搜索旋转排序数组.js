/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //题目要求O(logn)复杂度，考虑二分，这个题和153.类似，都是一个有序数组经过了旋转找到某个值
    //对于有序数组，我们可以简单地用二分查找，对于旋转过的数组同样可以
    let left = 0
    let right = nums.length-1
    //二分查找公式
    while(left <= right){
        let mid = (left+right)>>1
        if(nums[mid] === target){
            return mid
        }
        //我们将数组一切为二
        //1.有可能左边是有序数组，右边是部分有序数组，可以画一个折线图理解一下
        if(nums[0] <= nums[mid]){
            //此时如果target在左边区间，就去左边区间继续找
            if(target >= nums[0] && target < nums[mid]){
                right = mid-1
            }else{
                //否则就去右边区间
                left = mid + 1
            }
        }else{//2.有可能左边是部分有序，右边是有序数组
            //同理，如果target在右区间就去右区间找
            if(target > nums[mid] && target <= nums[nums.length-1]){
                left = mid + 1
            }else{
                right = mid -1
            }
        }
    }
    //最后没找到返回-1
    return -1
};
