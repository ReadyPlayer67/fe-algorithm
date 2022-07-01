/**
 * 求一个升序数组两数之和的问题，空间复杂度要求为O(1)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
    //一般数组问题，如果空间复杂度要求为常数级别，都可以考虑双指针
    let left=0
    let right = numbers.length-1
    //定义两个指针，一个在数组开头，一个在数组结尾
    while(left <= right){
        //如果两个指针位置的元素和小于目标，右指针足以，否则左指针右移
        if(numbers[left]+numbers[right]<target){
            left++
        }else if(numbers[left]+numbers[right]>target){
            right--
        }else{
            return [left+1,right+1]
        }
    }
};
