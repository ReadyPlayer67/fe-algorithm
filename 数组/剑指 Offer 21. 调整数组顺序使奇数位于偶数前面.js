/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  //类似283.移动零的思路，用两个指针
  //slow指向输出数组的尾部，fast指向待处理数组的头部
  let slow = 0
  let fast = 0
  while(fast < nums.length){
    //如果fast指针位置是奇数，就和slow指针位置交换，并且slow++
    if(nums[fast] % 2 === 1){
      let tmp = nums[slow]
      nums[slow] = nums[fast]
      nums[fast] = tmp
      slow++
    }
    fast++
  }
  return nums
};
