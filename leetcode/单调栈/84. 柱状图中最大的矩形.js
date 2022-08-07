/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    //这道题和接雨水类似，接雨水是求一个数两边第一个比他大的数，而这题是求一个数两边第一个比他小的数
    //以这个数为高度的矩形的最大面积等于右边第一个比他小的数的下标减去左边第一个比他小的数的下标再-1得到宽度，乘以高度
    //因此我们需要一个单调栈（从栈头到栈底单调递减）来找到一个数右边第一个比他小的数的下标（左边第一个比他小的数的下标就是单调栈前一个数）
    //因为heights第一个元素没有左边元素，最后一个元素没有右边元素，我们不好找第一个比他们小的左/右元素
    //所以我们在头部和尾部各加一个0，便于计算
    heights.unshift(0)
    heights.push(0)
    //初始化单调栈和记录最大面积的变量
    let stack = [0]
    let max = 0
    //从第一位开始遍历heights
    for(let i=1;i<heights.length;i++){
        //如果当前元素比前一个元素大或相等，直接push到单调栈中
        //但是如果比前一个元素小，为了维持单调栈的原则，需要弹出最后一个元素
        while(stack.length && heights[i] < heights[stack[stack.length-1]]){
            //记录弹出的元素下标为mid，也就是当前矩形的高度
            let mid = stack.pop()
            //左侧第一个比mid小的元素就是当前stack最后一个元素，记录为left
            let left = stack[stack.length-1]
            //右侧第一个比mid大的元素下标就是i，所以当前矩形的宽度为i-left-1
            let w = i - left - 1
            let h = heights[mid]
            //计算面积并与当前最大的面积比较，取最大值
            let ret = w*h
            max = Math.max(max,ret)
        }
        stack.push(i)
    }
    //最后遍历完就得到了全局最大的矩形面积
    return max
};
