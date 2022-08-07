/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    //这道题有双指针，动态规划，单调栈解法，因为我是在刷单调栈分类刷到这题的，这里用单调栈解法
    //单调栈解法是按照行来计算雨水的面积的[2,1,0,1,3]，先计算101这个凹槽的水，再计算21113这个凹槽的水
    //初始化一个单调栈，栈头到栈底是单调递增的，因为我们需要找到右边第一个比当前元素大的值（类似739.每位温度那题）
    //栈中存放的是height的下标（需要计算下标差，也就是宽度），初始放入下标0
    let stack = [0]
    //初始化一个ret用来存储最终能存多少雨水
    let ret = 0
    //从第1位开始遍历height数组
    for(let i=1;i<height.length;i++){
        //判断height[i]是否比栈头的元素大，如果大说明出现了凹槽
        while(stack.length && height[i] > height[stack[stack.length-1]]){
            //凹槽底部的下标，此时我们已经找到了凹槽底部，凹槽右侧的墙，现在我们需要找到左侧的墙
            const top = stack.pop()
            //如果stack中没有元素，说明不存在比槽底高的左侧墙，可以忽略
            if(stack.length){
                //如果存在左侧墙，一定是凹槽前一个位置的元素，因为当前栈是单调的，前一个元素一定大于等于后面的元素
                //获取左侧墙的下标
                let preTop = stack[stack.length-1]
                //计算出凹槽的高度，我们需要比较左侧墙和右侧墙，两者的最小值是凹槽高度
                let h = Math.min(height[preTop],height[i])-height[top]
                //计算出凹槽宽度，用右侧墙的下标减去左侧墙的下标再-1
                let w = i - preTop - 1
                //算出面积，累加到ret里
                ret += h*w
            }
        }
        //最后要把当前下标添加到栈中
        stack.push(i)
    }
    return ret
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
