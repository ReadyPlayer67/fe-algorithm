/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    //这题和41.缺失的第一个整数差不多，按照题目O(n)的时间复杂度，O(1)的空间复杂度要求，用原地哈希的方法
    let ret = []
    for(let i=0;i<nums.length;i++){
        //如果nums[i]没有出现在nums[i]-1的位置，就通过交换把他移动到nums[i]-1下标位置
        //循环次操作，知道交换过来的数字满足条件
        while(nums[i] !== nums[nums[i]-1]){
            swap(nums,nums[i]-1,i)
        }
    }
    //这样交换后，如果i出现了一次，他会被放置在i-1的下标位置
    //如果i出现了两次，一个i会放置在i-1处，另一个i会放在另一个下标位置j
    //所以我们再次遍历nums，当发现了当前下标的数字不满足nums[i]===i+1，说明他是重复出现的数字
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== i+1){
            ret.push(nums[i])
        }
    }
    return ret
};

function swap(nums,index1,index2){
    let tmp = nums[index1]
    nums[index1] = nums[index2]
    nums[index2] = tmp
}
