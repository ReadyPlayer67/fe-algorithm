/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  //其实就是将26进制转换为一个10进制数
  let ret = 0
  //遍历26进制数每一位
  for(let i=0;i<columnTitle.length;i++){
    //当前位数的值就是字母代表的数字乘以26的n次方，n为当前数的位数
    //比如'BAA'的B就是B的值2乘以26的2次方
    //每一位计算累加起来就得到了最终的结果
    ret += (columnTitle[i].charCodeAt() - 'A'.charCodeAt()+1)*26**(columnTitle.length-i-1)
  }
  return ret
};
