/**
 * 利用一个map做缓存，每次遍历把插值当做key存到map里
 * @param nums
 * @param target
 * @returns {[any,number]|*[]}
 */
const twoSum = function(nums, target) {
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        let diff = target - nums[i]
        if(map.has(diff)){
            return [map.get(diff), i]
        }
        map.set(nums[i],i)
    }
    return []
};
