/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    //当前读取到的字符下标
    let index = 0
    //标记正号还是负号
    let sign = 1
    //结果数字
    let ret = 0
    //读取到空格就跳过
    while(s[index] === ' '){
        index++
    }
    //读取到'+'，sign=1，读取到'-'，sign=-1
    if(index < s.length && s[index] === '+'){
        sign=1
        index++
    }else if(index < s.length && s[index] === '-'){
        sign=-1
        index++
    }
    //如果下一位是数字字符
    while(index<s.length && s[index]>='0' && s[index]<='9'){
        //将字符转换为Number类型
        let digit = s[index]-'0'
        //加上符号
        digit = sign*digit
        //累加数字
        ret = ret*10+digit
        //处理越界情况
        if (ret <= 0-2**31){
            return 0-2**31
        } else if (ret >= 2**31-1){
            return 2**31-1
        }
        index++
    }
    return ret
};
