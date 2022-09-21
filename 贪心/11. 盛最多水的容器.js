/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  //双指针，定义两个指针left，right分别指向数组左右两端，计算出此时可以盛水的容量
  //之后开始移动高度较小的那个指针，因为容量由短板决定，如果移动高度较大的指针
  //盛水容量会因为宽度变小而一直减小下去，所以高度较大的指针不应当移动
  //不断计算后续的容量，知道两个指针相遇
  const len = height.length
  let left = 0
  let right = len - 1
  let max = 0
  while(left <= right){
    const capacity = (right-left)*Math.min(height[left],height[right])
    max = Math.max(max,capacity)
    if(height[left] <= height[right]){
      left++
    }else{
      right--
    }
  }
  return max
};
