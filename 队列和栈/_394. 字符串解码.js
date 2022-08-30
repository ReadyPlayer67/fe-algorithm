/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    //我的解法，利用两个栈
    let ret = ''
    //括号中字符重复次数的栈
    let timesStack = []
    //括号中重复的字符串的栈
    let strStack = []
    let i = 0
    //当前括号中重复的字符串和重复次数
    let repeatTimes = 0
    let repeatStr = ''
    //开始遍历s
    while(i < s.length){
        //如果当前字符是数字，拼接数字得到当前重复的次数
        while(isDigit(s[i])){
            repeatTimes = repeatTimes*10+Number(s[i])
            i++
        }
        //遇到[时，将重复次数入栈，并且重复字符串的栈推入一个空字符
        if(s[i]==='['){
            timesStack.push(repeatTimes)
            strStack.push('')
            //重置repeatTimes
            repeatTimes = 0
            i++
        }
        //如果遇到字母，分两种情况
        while(s[i] >= 'a' && s[i]<='z'){
            //1.timesStack还有元素，说明当前字符在[]中，将他累加到repeatStr中
            if(timesStack.length){
                repeatStr += s[i]
            }else{
                //2.timesStack中没有元素了，说明是在最外面，直接拼接到ret中即可
                ret += s[i]
            }
            i++
        }
        //如果repeatStr不为空字符串，更新strStack的最后一项，拼接上repeatStr
        if(repeatStr.length){
            strStack[strStack.length-1] += repeatStr
            repeatStr = ''
        }
        //遇到]，开始拼接字符，用两个栈顶元素构造出str
        if(s[i]===']'){
            let str = (strStack.pop()).repeat(timesStack.pop())
            //如果strStack.length>0，说明外面还有括号，累加到外层的str中
            if(strStack.length){
                strStack[strStack.length-1] += str
            }else{
                //否则直接拼接到ret上
                ret += str
            }
            i++
        }
    }
    return ret
};
//判断字符是否是数字的工具方法
function isDigit(s){
    return !isNaN(Number(s))
}

//官方解法，更简洁
var decodeString2 = function(s) {
    //维护一个栈，遍历字符串s：
    let stack = []
    let i = 0
    while(i<s.length){
        const char = s[i]
        //1.当遇到数字时，解析出一个数字并入栈
        if(isDigit(char)){
            let num = ''
            while(isDigit(s[i])){
                num+=s[i]
                i++
            }
            stack.push(+num)
            //2.当遇到[时，直接入栈
        }else if(char === '['){
            stack.push(char)
            i++
        }else if(char === ']'){
            //3.当遇到]时，从栈中弹出[前的字母和[，拼接成一个字符串，此时栈顶的元素一定为之前解析出的数字
            //用repeat方法构造出新的字符串并继续入栈
            let strArr = []
            while(stack[stack.length-1] !== '['){
                strArr.unshift(stack.pop())
            }
            let str = strArr.join('')
            stack.pop()
            let num = stack.pop()
            str = str.repeat(num)
            stack.push(str)
            i++
        }else{
            //4.当遇到字母时，同样直接入栈
            stack.push(char)
            i++
        }
    }
    //最后将栈中所有的字符串拼接起来就得到了结果
    return stack.join('')
};

console.log(decodeString2("3[a]2[bc]"))
