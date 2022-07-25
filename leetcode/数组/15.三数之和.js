/**
 * 排序+双指针实现求三数之和为0的三元组
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    //边界情况，如果数组项少于3，不存在解
    if(nums.length < 3){
        return []
    }
    let list = []
    //先对数组进行排序O(n*logn)
    nums.sort((a,b) => a - b)
    //[-4,-1,-1,0,1,2]
    //从第0项开始遍历数组
    for(let i=0;i<nums.length;i++){
        //如果数组项等于上一项，直接跳过，避免重复解
        if(nums[i] === nums[i-1]){
            continue
        }
        //定义两个指针，一个指向i+1，代表i之后最小的元素
        let left = i+1
        //right指向nums.length-1，代表数组中最大的元素
        let right = nums.length-1
        //如果两个指针没有相遇
        while(left < right){
            //存在三者情况，第一种三数相加=0，说明找到一个解
            if(nums[i]+nums[left]+nums[right]===0){
                //将解push到结果中
                list.push([nums[i],nums[left],nums[right]])
                //之后要继续寻找，因为left和right之间可能还存在解
                //跳过重复的数字避免重复解
                while(nums[left] === nums[left+1]){
                    left++
                }
                while(nums[right] === nums[right-1]){
                    right--
                }
                //右移左指针和左移右指针，继续寻找解
                left++
                right--
            //如果三数之和小于0，说明最小项太小了，left指针右移
            }else if(nums[i]+nums[left]+nums[right]<0){
                left++
            //如果三数之和大于0，说明最大项太大了，right指针左移
            }else{
                right--
            }
        }
    }
    return list
};
