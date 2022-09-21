/**
 * 删除升序数组中的重复项，返回删除后数组的长度，且空间复杂度为O(1)
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    //因为空间复杂度要求为O(1)，所以不能新建一个数组，循环往新数组中push不存在的元素这种方式
    if(nums.length === 0){
        return 0
    }
    //这里我们利用双指针（快慢指针），初始都指向第一个元素
    let slow = 0
    let fast = 0
    //迭代中止条件是快指针到达终点
    while(fast < nums.length){
        //如果当前快指针的值和慢指针的值一样就什么都不干
        //如果不一样就让慢指针前进一位，然后把值替换为快指针的值
        //这样就把不一样的值排到了数组的最前面
        if(nums[slow] !== nums[fast]){
            slow++
            nums[slow] = nums[fast]
        }
        fast++
    }
    //最后返回slow+1，就是不同元素的数量
    return slow+1
};
