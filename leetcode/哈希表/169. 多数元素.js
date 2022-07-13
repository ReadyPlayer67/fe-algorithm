/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //用一个哈希表存放每个数的出现次数
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        const num = nums[i]
        if(map.has(num)){
            let count = map.get(num)
            count++
            map.set(num,count)
        }else{
            map.set(num,1)
        }
        //检查当前数的个数有没有超过n/2，超过了代表这个数字是多数元素，返回
        if(map.get(num) > nums.length/2){
            return num
        }
    }
};
