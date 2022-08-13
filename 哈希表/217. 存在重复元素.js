/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //哈希表解法（也可以进行排序然后遍历）
    let map = new Map()
    for(let num of nums){
        if(map.has(num)){
            return true
        }else{
            map.set(num,0)
        }
    }
    return false
};
