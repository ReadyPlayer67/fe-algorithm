/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    //使用一个新的栈，模拟栈的推入和弹出操作即可
    let stack = []
    //外层循环执行推入操作
    while(pushed.length){
        //从pushed头部弹出一个元素，push到stack中
        stack.push(pushed.shift())
        //stack和popped都不为空，且stack顶部元素与popped第一个元素相等，表示执行了弹出操作
        while(stack.length && popped.length && stack[stack.length-1] === popped[0]){
            //从stack顶部弹出一个元素，popped也要移除头部元素
            stack.pop()
            popped.shift()
        }
    }
    //最后执行完所有推入和弹出操作后，pushed和popped都应当为空
    //pushed因为循环结束肯定为空，此时我们只要检查popped是否为空即可，为空则弹出序列有效，否则无效
    return popped.length === 0
};
