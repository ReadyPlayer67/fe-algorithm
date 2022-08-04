/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    //我的解法，对于n=352,如果大于等于他最大位数3在repeat他的位数，也就是333
    //那么就一定存在3xx复合题解，否则就是299
    //先检查352，发现大于333，去掉首位3，变成52，继续检查它是否大于等于55，发现不大于，那就是49，最后加上300就是349
    let ret = 0
    let str = n+''
    //构造最大位数repeat str.length次得到比较的数
    let flagNum = Number(str[0].repeat(str.length))
    //循环检查当前n是否大于flagNum且n>0（到最后处理个位数时n会等于0）
    while(n>=flagNum && n > 0){
        //构造首位为当前n的首位，后面都是0的数字
        let zeroNum = Number(str[0].padEnd(str.length,'0'))
        //最终结果先加上zeroNum
        ret += zeroNum
        //n去掉首位
        n = n % zeroNum
        str = n+''
        flagNum = Number(str[0].repeat(str.length))
    }
    //如果n>0且n<flagNum了，那么小于他的递增数就是首位为当前n的首位，后面都是0的数字-1,比如52，小于它的递增数就是50-1=49
    if(n>0){
        let num = Number(str[0].padEnd(str.length,'0')) - 1
        //累加到ret上
        ret += num
    }
    return ret
};

var monotoneIncreasingDigits2 = function(n) {
    //另一种解法
    //首先将数字转换为每位数字组成的数组，322->[3,2,2]
    n = n+''
    n = n.split('').map(item => +item)
    //flag用来标记赋值9从哪里开始
    let flag = n.length
    //从最后一位开始从右往左遍历数组，如果i-1位小于等于i位，那么不用修改
    for(let i=n.length-1;i>0;i--){
        //如果出现i-1位的数字大于i位的数字
        if(n[i-1] > n[i]){
            //flag=i，i位之后的数字都要变成9
            flag = i
            //i-1位数字要-1
            n[i-1]-=1
        }
    }
    //将flag位置后的数字都改成9
    for(let i=flag;i<n.length;i++){
        n[i] = 9
    }
    //最后将数组拼接成数字
    n = n.join('')
    return +n
};

console.log(monotoneIncreasingDigits2(10))
