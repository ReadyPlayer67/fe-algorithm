/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  //本题和153的区别就是数组项可能重复，那么旋转后的数组可能失去了二段性
  const n = nums.length
  let left = 0
  let right = n-1
  //那么我们就恢复该数组的二段性，如果nums最后几项和nums[0]相等，就忽略该项
  while(right > left && nums[0] === nums[right]){
    right--
  }
  //之后就和153一样，利用二分查找旋转点下标
  while(left<right){
    let mid = (left+right+1)>>1
    if(nums[0] <= nums[mid]){
      left = mid
    }else{
      right = mid-1
    }
  }
  return left + 1 < n ? nums[left+1] :nums[0]
};
