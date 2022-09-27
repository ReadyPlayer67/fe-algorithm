/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    //用一个栈存储待计算的数据
    let stack = []
    //遍历tokens
    for(let i=0;i<tokens.length;i++){
        let char = tokens[i]
        if(isOperator(char)){//如果字符是运算符,就从栈顶弹出两个数字，进行运算
            let b = stack.pop()
            let a = stack.pop()
            let result = 0
            if(char === '+'){
                result = a+b
            }else if(char === '-'){
                result = a-b
            }else if(char === '*'){
                result = a*b
            }else{
                result = parseInt(a/b)
            }
            //运算完后push到stack中，留着下一次运算用
            stack.push(result)
        }else{//如果字符不是运算符，就直接push到stack中
            //用Math.trunc方法去除浮点数的小数部分，保留整数
            stack.push(Math.trunc(char))
        }
    }
    //最后stack中的值就是运算结果
    return stack.pop()
};

function isOperator(char){
    return ['+','-','*','/'].includes(char)
}
