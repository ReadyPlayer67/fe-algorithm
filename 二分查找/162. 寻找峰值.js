/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  //根据题目要求，考虑二分法
  //核心思路为‘人往高处走’,如果一个节点的值比他右边的节点小，说明峰值一定在这个节点右边，往右走
  //反之如果比他右边的节点大，往左走
  let left = 0
  let right = nums.length-1
  while(left < right){
    //选数组的中点作为随机点，比较改点的值和他右边的值大小关系
    let mid = (left+right)>>1
    //注意这里不用考虑n+1越界，因为数组的最后部分一定是一个下坡，遇到下坡我们会往左走
    //所以mid永远不可能走到下标为nums.length-1的位置
    if(nums[mid] < nums[mid+1]){
      //往右走，左边的区间都可以舍去了
      left = mid+1
    }else{
      //往左走，右边的区间都可以舍去了
      right = mid
    }
  }
  //循环会在left===right时退出，所以返回left和right均可
  return left
};
