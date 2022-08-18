/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    //利用栈将字符串转换为mark数组，有效位置的数组项为0，无效位置为1，之后求数组中最长的连续0长度即可
    let stack = []
    //初始化一个mark数组，默认所有位置都是0
    let mark = new Array(s.length).fill(0)
    //遍历字符串
    for(let i=0;i<s.length;i++){
        //如果是(，直接push下标到栈中
        if(s[i] === '('){
            stack.push(i)
        }else{
            //如果是)的话，如果他是有效的，栈此时一定不是空的，并且栈的最后一位一定是(，将栈最后一位弹出
            if(!stack.length){
                //否则他就是无效的，没有(与他匹配，我们将mark数组的这一位设置为1
                mark[i] = 1
            }else{
                stack.pop()
            }
        }
    }
    //之后我们还需要检查栈中是否有无效的(，因为我们之前遇到(都直接push到栈中了
    //将栈中元素(的下标标记为1
    while(stack.length){
        mark[stack.pop()] = 1
    }
    let maxCount = 0
    let count = 0
    //遍历mark数组，求出mark中最长连续0的长度
    for(let item of mark){
        if(item === 0){
            count++
            maxCount = Math.max(count,maxCount)
        }else{
            count = 0
        }
    }
    return maxCount
};

console.log(longestValidParentheses("()(())"))
