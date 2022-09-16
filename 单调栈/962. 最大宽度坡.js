/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
  //利用单调栈，首先遍历一遍数组构造一个从栈底到栈顶单调递减的栈stack，stack中存放的数组下标
  //这样我们就记录了从左到右坡底所在的位置
  const n = nums.length
  let maxWidth = 0
  let stack = []
  for(let i=0;i<n;i++){
    if(!stack.length || nums[stack[stack.length-1]] > nums[i]){
      stack.push(i)
    }
  }
  //然后我们从后往前遍历数组，若栈顶元素小于当前元素，就发现了一个坡
  //我们将栈顶元素弹出，计算出坡的宽度，并更新全局最大坡宽度
  for(let i=n-1;i>-0;i--){
    while(stack.length && nums[stack[stack.length-1]] <= nums[i]){
      const pos = stack.pop()
      maxWidth = Math.max(maxWidth,i - pos)
    }
  }
  return maxWidth
};

maxWidthRamp([6,0,8,2,1,5])
