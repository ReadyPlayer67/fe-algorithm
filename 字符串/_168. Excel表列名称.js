/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    //这道题其实就是将一个10进制数转换为26进制
    //定义一个数组用来存放结果
    let ret = []
    //首先获取A的charCode
    const code = 'A'.charCodeAt()
    //开始转换，循环的终止条件是columnNumber<=10
    while(columnNumber > 0){
        //因为这题1对应的是A而不是0对应A，所以每次转换前要减去1
        columnNumber--
        //将每次columnNumber除以26的余数作为偏移量加上A的charCode，转换为字母
        //将这个字母从头目插入数组中，因为我们是从个位数开始转换的
        ret.unshift(String.fromCharCode(columnNumber%26+code))
        //columnNumber重新赋值为它除以26的整数部分
        columnNumber = Math.floor(columnNumber/26)
    }
    //将数组拼接位字符串
    return ret.join('')
};
