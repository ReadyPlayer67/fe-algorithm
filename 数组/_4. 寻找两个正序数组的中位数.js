/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //合并数组后取中位数，时间复杂度为O(m+n)
    let nums = []
    while(nums.length && nums.length){
        if(nums1[0] > nums2[0]){
            nums.push(nums2.shift())
        }else{
            nums.push(nums1.shift())
        }
    }
    if(nums1.length){
        nums = nums.concat(nums1)
    }
    if(nums2.length){
        nums = nums.concat(nums2)
    }
    if(nums.length % 2 === 1){
        return nums[(nums.length-1)/2]
    }else{
        let index = nums.length/2
        return (nums[index-1]+nums[index])/2
    }
};

console.log(findMedianSortedArrays([1,3],[2]))
