/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    //这题和496题的区别就是nums是一个循环数组，处理循环数组的常见方法是把数组”拉直“
    //即复制一份数组拼在原数组后面再进行遍历，这种方法当然可以
    //但是有一个空间复杂度更低的方案：遍历长度为两倍数组长度，循环下标为i%len即可
    const len = nums.length
    //同样的套路，初始化ret数组、单调栈
    let ret = new Array(len).fill(-1)
    let stack = []
    //循环终止条件为数组长度*2，这样就相当于遍历了一个两个数组拼接起来的长数组
    for(let i=0;i<len*2;i++){
        console.log(stack)
        console.log(ret)
        console.log('------')
        //下面都是相同的操作，只不过nums[i]变成了nums[i%len]，这样就能保证循环到第二圈时能够正确地取到nums[i]
        while(stack.length && nums[i%len] > nums[stack[stack.length-1]]){
            const top = stack.pop()
            ret[top] = nums[i%len]
        }
        stack.push(i%len)
    }
    return ret
};

nextGreaterElements([1,2,1])
