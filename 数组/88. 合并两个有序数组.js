/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //这道题从后向前遍历可以做到不需要额外创建一个结果数组，做到O(1)空间复杂度
    //因为从后向前遍历，填充nums1不会覆盖nums1的元素
    //i和j是nums1和nums2开始遍历的下标
    let i = m-1
    let j = n-1
    //k是填充nums1的下标
    let k = nums1.length-1
    //只要nums1和nums2还有元素没被处理就继续遍历
    while(i >= 0 || j >= 0){
        let cur
        //当nums1中元素被处理完了，直接填充nums2下一个元素
        if(i === -1){
            cur = nums2[j]
            j--
        }else if(j === -1){
            //当nums2中元素被处理完了，直接填充nums1下一个元素
            cur = nums1[i]
            i--
        }else if(nums1[i] > nums2[j]){
            //如果两个数组都还有元素，比较大的那一个优先填充
            cur = nums1[i]
            i--
        }else{
            cur = nums2[j]
            j--
        }
        nums1[k] = cur
        k--
    }
};
