/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //哈希表解法
    let map = {}
    for(let num of nums){
        if(map[num]){
            map[num]++
        }else{
            map[num]=1
        }
    }
    for(let key in map){
        if(map[key] === 1){
            return key
        }
    }
};
