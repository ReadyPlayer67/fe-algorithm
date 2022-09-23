/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    //这题可以用哈希表来做，但涉及到去重用set更好
    //将nums1转换为set
    let set1 = new Set(nums1)
    let set2 = new Set()
    //遍历nums2，如果set1中存在i，就add到set2中
    for(let i of nums2){
        if(set1.has(i)){
            set2.add(i)
        }
    }
    //将set2转换为数组返回
    return [...set2]
};
