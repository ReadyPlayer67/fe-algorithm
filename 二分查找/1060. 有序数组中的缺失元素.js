// 给出一个有序数组 A，数组中的每个数字都是 独一无二的，找出从数组最左边开始的第 K 个缺失数字。
// 示例 1：
// 输入：A = [4,7,9,10], K = 1
// 输出：5
// 解释：
// 第一个缺失数字为 5 。
// 示例 2：
//
// 输入：A = [4,7,9,10], K = 3
// 输出：8
// 解释：
// 缺失数字有 [5,6,8,...]，因此第三个缺失数字为 8
// 示例 3：
//
// 输入：A = [1,2,4], K = 3
// 输出：6
// 解释：
// 缺失数字有 [3,5,6,7,...]，因此第三个缺失数字为 6 。
function missingElement(nums,k){
  //这道题是尊贵的会员题T T
  //二分思想，首先我们明确：如果nums中没有任何缺失，那么nums中两个相邻元素的差值应当都为1
  //如果有缺失，我们要计算第i位数和第0位数之间缺了多少个数字应当这样计算：nums[i]-nums[0]-(i-0)
  //nums[i]-nums[0]表示从第i位到第0位实际加了多少次1，i-0表示不过不缺失任何整数应当加多少次1
  //两者的差值就是丢失了多少个整数，那么现在我们就要确定i的值，找到了i，第k个缺失的整数就在数字nums[i-1]和nums[i]之间，即：
  //nums[i-1]+k-missing(i-1,nums)，missing(i-1,nums)即i-1位之前丢失的整数总数，用k减去他就得到nums[i-1]应当加的数
  const length = nums.length
  //如果最后一位数丢失的整数个数都小于k，那么缺失的数一定在nums[length-]之后了
  if(k > missing(length-1, nums)){
    return nums[length-1] + k - missing(length-1,nums)
  }
  //找出i的位置我们可以用二分，不用从头开始遍历，因为该数组具有二段性
  let left = 0,right = length-1
  while(left < right){
    let mid = (left+right) >> 1
    //如果截止到mid缺失的数字数量小于k，那么i一定在mid右边的区间，否则就去左边区间找
    if(missing(mid,nums) < k){
      left = mid + 1
    }else{
      right = mid
    }
  }
  //循环终止时left===right，就是我们要找的下标i
  return nums[left-1] + k - missing(left-1,nums)
}
//工具方法，求出截止到index为止，缺失的数字数量
function missing(index,nums){
  return nums[index] - nums[0] - (index - 0)
}

console.log(missingElement([4,6,9,10],3))
console.log(missingElement([1,2,4],3))
