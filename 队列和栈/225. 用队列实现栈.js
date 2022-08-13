//只用队列的push,shift等方法实现一个栈
var MyStack = function() {
    //内部用一个队列存储数据
    this.queue = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    //push就直接用push方法
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    //弹出元素的时候先进行遍历，把最后一个元素前面的元素都push到队列最后
    //这时候队列第一个元素就是之前的最后一个元素，也就是栈顶我们要pop的元素，直接shift即可
    let len = this.queue.length
    for(let i=1;i<len;i++){
        this.queue.push(this.queue.shift())
    }
    return this.queue.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    //返回栈顶元素，先通过pop拿到该元素，再push进去
    const ele = this.pop()
    this.queue.push(ele)
    return ele
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
