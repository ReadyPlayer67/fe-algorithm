/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    //因为删了一组相邻重复项有可能会产生另外一组，比如abba
    //所以我们要保留未删除的字符串，利用栈可以实现
    let stack = []
    //遍历字符串
    for(let i=0;i<s.length;i++){
        let char = s[i]
        //如果栈不为空且栈的最后一项和当前遍历的字符串相同，说明出现了一组相邻重复项，直接pop
        if(stack.length > 0 && stack[stack.length-1] === char){
            stack.pop()
        }else{//不是相邻重复项，push进stack
            stack.push(char)
        }
    }
    //拼接字符串
    return stack.join('')
};
