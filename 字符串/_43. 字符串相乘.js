/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    //模拟在草稿纸上算乘法的过程，首先处理边缘情况
    if(num1 === '0' || num2 === '0'){
        return '0'
    }
    let ret = ''
    //将num1,num2转换为数字组成的数组
    let num1Arr = num1.split('').map(x=>+x)
    let num2Arr = num2.split('').map(x=>+x)
    //定义一个index代表num1第几位计算，末尾要补几个0
    let index = 0
    //123 num2
    //456 num1
    //从后向前遍历num1Arr，计算num1每一位数字和num2相乘的结果
    while(num1Arr.length){
        let num = num1Arr.pop()
        let needPlus = 0
        let ans = []
        let i = num2Arr.length-1
        //遍历num2Arr，计算num1当前位数字和num2每一位数字乘积，用一个数组保存结果
        while(i>=0 || !!needPlus){
            const d = i>= 0 ? num2Arr[i] : 0
            let mult = num * d + needPlus
            needPlus = Math.floor(mult/10)
            mult %= 10
            ans.unshift(mult)
            i--
        }
        //根据index在ans后面补0
        ans = ans.join('')+'0'.repeat(index)
        //补零之后进行求和计算，累加到ret字符串上
        ret = addNum(ret,ans)
        index++
    }
    return ret
};
//计算两数相加的方法，可以直接用415.字符串相加的解法
function addNum(num1,num2){
    let i = num1.length-1
    let j = num2.length-1
    let addOne = 0
    let ans = []
    while(i >= 0||j>=0||!!addOne){
        let d1 = i >= 0 ? Number(num1[i]) : 0
        let d2 = j >= 0 ? Number(num2[j]) : 0
        let ret = d1 + d2 + addOne
        if(ret >= 10){
            addOne = 1
        }else{
            addOne = 0
        }
        ret %= 10
        ans.unshift(ret)
        i--
        j--
    }
    return ans.join('')
}
