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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search2 = function(nums, target) {
  //更清晰的解法，首先通过二分找到旋转点的位置
  //然后通过target和nums[0]的大小关系，判断target在左边还是右边的升序数组中
  //最后就变成了在有序数组中寻找target
  let left = 0
  let right = nums.length-1
  //寻找旋转点下标
  while(left<right){
    //这里注意是(left+right+1)>>1而不是(left+right)>>1，是为了避免死循环
    //因为当数组长度为2时，下标0+1>>1还是0，这样如果nums[0]<=nums[mid]那么left和mid就永远是0，陷入死循环
    let mid = (left+right+1)>>1
    if(nums[0]<=nums[mid]){
      left = mid
    }else{
      right = mid-1
    }
  }
  //此时left和right都指向旋转点的位置
  //如果target>=nums[0]，说明target在左边的升序数组中，重置left即可
  if(target >= nums[0]){
    left=0
  }else{
    //如果target<nums[0]，说明target在右边的升序数组中，重置right，并且left++
    right = nums.length-1
    left++
  }
  //二分法查找有序数组中的target
  while(left<=right){
    let mid = (left+right)>>1
    if(target<nums[mid]){
      right = mid-1
    }else if(target>nums[mid]){
      left = mid+1
    }else{
      return mid
    }
  }
  return -1
};
