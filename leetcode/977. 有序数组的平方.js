/**
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * @param {number[]} nums
 * @return {number[]}
 */
//这题可以简单的进行暴力求解，先平方再排序，但是我们可以利用双指针降低复杂度
var sortedSquares = function(nums) {
    //先初始化一个结果数组
    let arr = new Array(nums.length)
    let left=0
    let right=nums.length-1
    //指针k指向arr的最后一位
    let k=right
    while(left <= right){
        //因为数组中可能存在负值[-4,-1,0,3,5]
        //所以arr最后一位可能是nums[left]的平方，也可能是nums[right]的平方
        let l = nums[left]*nums[left]
        let r = nums[right]*nums[right]
        //如果l和r中较大的值负值给arr[k]，左移k指针，并且left和right指针往数组中间位置移动
        if(l<r){
            arr[k] = r
            right--
        }else{
            arr[k] = l
            left++
        }
        k--
    }
    return arr
};
