/**
 * 把数组中所有等于val的元素都移除，返回移除后的数组长度
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length === 0){
        return 0
    }
    //左指针指向输出数组的尾部，右指针指向待处理数组的头部
    let slow=0
    let fast=0
    while(fast < nums.length){
        //如果快指针的值不等于val，就把快指针的值赋值给慢指针
        //因为当前慢指针要么和快指针在同一位置，覆盖也无所谓；要么慢指针当前所在位置元素等于val，是要被覆盖的
        if(nums[fast] !== val){
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    //最后返回慢指针的值，就是数组长度
    return slow
};
