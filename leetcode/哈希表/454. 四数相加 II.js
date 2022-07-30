/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    //哈希表+分组法，把数组分成两拨，nums1+nums2为一拨，nums3+nums4为一拨
    let map = {}
    //双层遍历nums1和nums2，将他们每项的和作为key,出现的次数作为value存到map中
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            let sum = nums1[i]+nums2[j]
            if(sum in map){
                map[sum]++
            }else{
                map[sum] = 1
            }
        }
    }
    let ret = 0
    //再双层遍历nums3和nums4,
    for(let i=0;i<nums3.length;i++){
        for(let j=0;j<nums4.length;j++){
            let sum = nums3[i]+nums4[j]
            //如果最后求和等于0，应当去map中寻找key=-sum的值
            let need = -sum
            //如果存在，就将次数加到ret中
            if(need in map){
                ret += map[need]
            }
        }
    }
    return ret
};
