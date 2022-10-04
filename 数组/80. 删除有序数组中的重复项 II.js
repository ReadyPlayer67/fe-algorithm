/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  //类似26.删除有序数组中的重复项解法，利用双指针解法
  const n = nums.length
  //边界情况，如果数组长度小于等于2，直接返回数组长度
  if(n <= 2){
    return n
  }
  //初始化两个指针slow，fast，默认都指向第二个下标
  let slow = 2
  let fast = 2
  while(fast < n){
    //如果nums[slow-2]===nums[fast]，代表nums[slow-2],nums[slow-1],nums[slow]都相同
    //那么当前nums[slow]不应当被保留，我们让fast++，准备下一次对比
    //当nums[slow-2]!==nums[fast]时，说明我们要用nums[fast]去覆盖掉不应当保留的nums[slow]
    //我们令nums[slow] = nums[fast]，并且slow++,fast++，两个指针都右移
    //最后slow指向的位置就是保留数组最后一项的后一位，slow即数组长度
    if(nums[slow-2] !== nums[fast]){
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
}

console.log(removeDuplicates([1,1,1,2,2,3]))
