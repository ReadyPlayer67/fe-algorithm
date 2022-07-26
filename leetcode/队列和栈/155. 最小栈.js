var MinStack = function() {
    //存放元素的数组
    this.stack = []
    //用来返回最小值的辅助栈，该辅助栈的最后一位代表当前栈中的最小值，有一个初始值Infinity
    //比如先push-2,再push0，再push-3
    //stack=[-2,0,-3]
    //stack=[-2,-2,-3]
    this.mins = [Infinity]
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    //每次push元素时和mins的最后一项比较，如果较小就push到mins中，更新当前栈中的最小值
    this.mins.push(Math.min(last(this.mins),val))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    //pop时将mins最后一项也pop，更新当前最小项
    this.stack.pop()
    this.mins.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return last(this.stack)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    //最小项就是mins的最后一项
    return last(this.mins)
};
//获取数组最后一项的工具函数
function last(arr){
    return arr[arr.length-1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
