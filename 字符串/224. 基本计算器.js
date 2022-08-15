/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    //括号会影响一个数字前面的运算符，所以我们尝试打开所有括号，得到没有括号，新的表达式
    //用一个栈记录每一层括号外面的运算符，1代表+，-1代表-，默认有一个值1，表示整个表达式最外面的符号是+
    //1+1可以理解成+(1+1)
    let stack = [1]
    //变量sign表示当前数字前面的运算符，默认是+: 1-2可以理解成+1-2
    let sign = 1
    //最终运算结果
    let ret = 0
    let i=0
    //开始遍历字符串s
    while(i<s.length){
        //遇到空格直接忽略
        if(s[i] === ' '){
            i++
        }else if(s[i] === '('){
            //遇到左括号，push一个当前符号到stack中，代表当前这个括号前面的运算符
            stack.push(sign)
            i++
        }else if(s[i] === ')'){
            //遇到右括号，弹出队列顶部的运算符
            stack.pop()
            i++
        }else if(s[i] === '+'){
            //遇到加号，用1（加号）乘以stack顶部的符号，得到展开括号后的符号
            //-(1+1)括号内的加号1乘以当前括号前面的符号-1，得到展开后的符号为减号
            sign = 1 * stack[stack.length-1]
            i++
        }else if(s[i] === '-'){
            //遇到减号，用-1（减号）乘以stack顶部的符号，得到展开括号后的符号
            sign = -1 * stack[stack.length-1]
            i++
        }else{
            //遍历字符串得到数字'233'->233
            let num = 0
            while(i<s.length && !isNaN(Number(s[i])) && s[i] !== ' '){
                num = num * 10 + Number(s[i])
                i++
            }
            //最终结果加等当前运算符乘以数字
            ret += sign * num
        }
    }
    return ret
};
