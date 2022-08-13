/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    //这题用模拟+哈希表来做，首先明确，一个数除以一个数的结果有三种：
    //1.整数 2.有限小数 3.无限循环小数
    //首先判断符号
    let sign = Math.sign(numerator) * Math.sign(denominator) >= 0 ? ''  : '-'
    //将除数和被除数都转换为正数来计算
    numerator = Math.abs(numerator)
    denominator = Math.abs(denominator)
    //如果numerator能被denominator除尽，代表结果是整数，直接返回符号+整数的字符串
    if(numerator % denominator === 0){
        return sign+numerator/denominator+''
    }
    //我们该如何得到无限循环小数的循环部分呢，可以用纸笔模拟一下除法的过程
    //其实就是对余数进行补零（乘以10），然后再除以除数，得到新的余数重复此操作
    //如果出现了之前出现过的余数，此时就表示之后的小数都是循环小数了，所以我们用一个哈希表记录每次除之后的余数
    let map = {}
    //先得到除数的整数部分integer
    let integer = Math.floor(numerator/denominator)
    //拼上小数点
    let result = integer+'.'
    //得到余数
    numerator %= denominator
    //如果能除尽，代表是有限小数，直接拼上并返回
    if(numerator === 0){
        return sign + result
    }
    //小数部分字符
    let str = ''
    //初始化一个index表示循环小数的起始位置，比如0.00121212...，起始位置就是2
    let index = 0
    //如果哈希表中没有以这个数，代表循环小数没有找结束，继续进行除法操作
    while(map[numerator] === undefined){
        //以余数为key，当前index为value，并且循环一次index+1
        map[numerator] = index++
        //余数补零
        numerator *= 10
        //小数部分字符拼上Math.floor(numerator/denominator)
        str += Math.floor(numerator/denominator)
        //再次取余
        numerator %= denominator
        //如果能除尽，代表是有限小数，直接拼上并返回
        if(numerator === 0){
            return sign + result + str
        }
    }
    //最后我们要截取无限循环小数开始的位置，也就是循环小数第一位的index
    let pos = map[numerator]
    //把循环的部分包上括号，返回
    return `${sign}${result}${str.slice(0, pos)}(${str.slice(pos)})`
};
console.log(fractionToDecimal(4,333))
