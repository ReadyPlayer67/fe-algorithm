/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    //暴力解法，时间复杂度O(n2)
    let ret = new Array(temperatures.length).fill(0)
    for(let i=0;i<temperatures.length-1;i++){
        let day = 1
        for(let j=i+1;j<temperatures.length;j++){
            if(temperatures[j]>temperatures[i]){
                ret[i] = day
                break
            }else{
                day++
            }
        }
    }
    return ret
};

/**
 * 利用单调栈，所谓单调栈，就是从栈顶到栈底，所有元素都是严格递增或递减的
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures2 = function(temperatures) {
    //通常是一维数组，要寻找任一个元素的右边或者左边第一个比自己大或者小的元素的位置，此时我们就要想到可以用单调栈了。
    let n = temperatures.length
    //先初始化一个结果数组
    let ret = new Array(n).fill(0)
    //可以维护一个存储下标的单调栈，从栈底到栈顶的下标对应的温度列表中的温度依次递减。如果一个下标在单调栈里，则表示尚未找到下一次温度更高的下标。
    //初始值为0，即temperatures第一个元素的下标
    let stack = [0]
    //从第1项开始遍历temperatures，因为第0项此时已在stack中
    for(let i=1;i<n;i++){
        //如果stack不为空且当前下标的温度大于stack顶部下标的温度，代表当前下标的天数是对于第top天，下一个更高温度出现的天数
        //弹出stack顶部元素top，i-top即两天的差值，也就是下一个更高温度出现在几天后，将这个差值i-top赋值给ret[top]
        //重复这个过程直到stack中没有元素或栈顶元素的温度大于当前温度，代表stack中不存在比当前天数温度低的了
        while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]){
            const top = stack.pop()
            ret[top] = i-top
        }
        //最后要将当前下标push到栈顶，用于之后的对比
        stack.push(i)
    }
    return ret
};
