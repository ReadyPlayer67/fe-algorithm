/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    //初始化一个栈用于比较
    let stack = []
    //初始化一个队列存放待比较的人
    let queue = senate.split('')
    //开始循环，如果存在带比较的人
    while(queue[0]){
        //弹出这个待比较的人
        let s = queue.shift()
        //如果stack为空或者stack的最后一个元素等于s，就把s放入stack中，此时他的否决权力还没有使用
        if(!stack.length || stack[stack.length-1] === s){
            stack.push(s)
        }else{
            //否则说明该元素会被stack中的元素禁用权力，该元素不会入stack也不会入queue
            //否局他的元素，也就是stack.pop()我们把他push到queue尾部
            //代表此时他的否决权力已经用过，只有再下一轮才会恢复权力（有可能会被本轮中还有权力的对立阵营人否决）
            queue.push(stack.pop())
        }
    }
    //当queue中没有元素了，代表这些轮投票已经结束了，此时stack中只会剩下获胜方的人
    //弹出看一下是天辉还是夜魇
    return stack.pop() === 'R' ? 'Radiant' : 'Dire'
}

console.log(predictPartyVictory('DDRRR'))
