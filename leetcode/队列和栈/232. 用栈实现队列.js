//用栈的push,pop方法实现一个队列
//类似225用双队列的方法，这里我们用两个栈
var MyQueue = function() {
    //stackIn专门负责push进元素
    this.stackIn = []
    //stackOut专门负责pop弹出元素
    this.stackOut = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    //push方法就直接往stackIn中push元素
    this.stackIn.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    //shift的时候我们首先去stackOut中看下有没有元素，有的话就直接pop
    if(this.stackOut.length){
        return this.stackOut.pop()
    }
    //如果没有元素，就先遍历stackIn，把里面的元素依次pop出来，再push到stackOut里，其实就是反转了一遍
    while(this.stackIn.length){
        this.stackOut.push(this.stackIn.pop())
    }
    //最后从stackOut中pop，其实就相当于stackIn进行shift
    return this.stackOut.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    //peek方法一个道理，先弹出一个元素保存下来再塞回去
    let x = this.pop()
    this.stackOut.push(x)
    return x
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    //stackIn和stackOut都为空才是空
    return !this.stackIn.length && !this.stackOut.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
