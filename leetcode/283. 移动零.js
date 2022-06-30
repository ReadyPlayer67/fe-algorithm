/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length === 0){
        return
    }
    //这题我的思路和27.移动元素类似，先把等于0的元素都覆盖了
    //之后遍历slow之后的元素，全改成0就好了
    let slow=0
    let fast=0
    while(fast < nums.length){
        if(nums[fast] !== 0){
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    for(let i=slow;i<nums.length;i++){
        nums[i] = 0
    }
};

//也可以用交换元素的方法实现
function moveZeroes2(nums){
    if(nums.length === 0){
        return
    }
    let slow=0
    let fast=0
    while(fast < nums.length){
        if(nums[fast] !== 0){
            let tmp = nums[slow]
            nums[slow] = nums[fast]
            nums[fast] = tmp
            slow++
        }
        fast++
    }
}
