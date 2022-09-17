/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    //遍历数组，记录当前连续1的个数，不断更新全局最大连续1的个数
    let ret = 0
    let cur = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i] === 1){
            cur++
            ret = Math.max(cur,ret)
        }else{
            cur = 0
        }
    }
    return ret
};
