/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  //因为题目约定输入数组一定能得到摆动排序结果，所以我们对nums进行升序排列后
  //得到x = Math.floor((n + 1) / 2)，nums[x]一定不等于nums[0]，如果等于相同的数字就超过数组的一半了
  //也就没法进行摆动排序了，因此我们得到nums[0]<nums[x],nums[1]<nums[x+1]...nums[i]<nums[i+x]
  //所以我们把nums[x]插入到nums[0],nums[1]中间，nums[x+1]插入到nums[1],nums[2]中间...即可
  const arr = nums.slice();
  arr.sort((a, b) => a - b);
  const n = nums.length;
  let x = Math.floor((n + 1) / 2)
  for (let i = 0, j = x - 1, k = n - 1; i < n; i += 2, j--, k--) {
    nums[i] = arr[j];
    if (i + 1 < n) {
      nums[i + 1] = arr[k];
    }
  }
};
