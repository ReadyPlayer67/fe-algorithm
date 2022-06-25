/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    //如果字符串长度不是偶数，肯定不满足
    if(s.length % 2 === 1) return false
    //给定一个映射关系对象
    const obj = {
        '(':')',
        '[':']',
        '{':'}',
    }
    //用一个栈来存储括号
    let stack = []
    for(let i=0;i<s.length;i++){
        let char = s.charAt(i)
        //如果是左括号，直接push到栈中
        if(char in obj){
            stack.push(char)
        //如果是右侧括号，检查是否和当前栈顶的括号匹配，不匹配就返回false
        }else if(char !== obj[stack.pop()]){
            return false
        }
    }
    //还有一种情况，字符串只有左括号'{['
    //他们都会push到栈中且不会执行右括号匹配，所以最后我们要检查栈是否为空，如果不为空还是false
    return stack.length === 0
}

console.log(isValid("()"))
