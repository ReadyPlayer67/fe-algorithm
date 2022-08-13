/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    //这题也是使用单调栈来做（涉及下一个更大的元素这种问题）
    //初始化一个map，key是nums2中元素的值，value是右侧的第一个比这个值大的元素的下标
    let map = {}
    //初始化一个从栈顶到栈底单调递增的栈
    let stack = [0]
    for(let i=0;i<nums2.length;i++){
        const num = nums2[i]
        if(num > stack[stack.length-1]){
            while(stack.length && num > stack[stack.length-1]){
                //如果当前元素大于栈顶元素，说明第一次出现了比栈顶元素大的元素
                const top = stack.pop()
                //把当前元素的下标赋值给map[top]
                map[top] = i
            }
            stack.push(num)
        }else{
            stack.push(num)
        }
    }
    //初始化一个结果数组
    let ret = new Array(nums1.length).fill(-1)
    //遍历nums1，根据map的key拿到下一个更大元素的位置
    for(let i =0;i<nums1.length;i++){
        const num = nums1[i]
        const res = nums2[map[num]]
        ret[i] = res ? res : -1
    }
    return ret
};
