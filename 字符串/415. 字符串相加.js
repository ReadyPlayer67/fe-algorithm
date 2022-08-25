/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    //模拟，从最后一位开始，每位数字相加，如果相加结果超过10就进1，plusOne=1
    //把累加的结果通过unshift添加到一个数组里，最后拼接数组
    let ret = []
    let arr1 = num1.split('')
    let arr2 = num2.split('')
    let plusOne = 0
    //两个数组中还剩数字或者需要进1，都需要进行计算
    while(arr1.length || arr2.length || plusOne === 1){
        const d1 = arr1.length > 0 ? Number(arr1.pop()) : 0
        const d2 = arr2.length > 0 ? Number(arr2.pop()) : 0
        let num = d1+d2+plusOne
        if(num>=10){
            num = num%10
            plusOne=1
        }else{
            plusOne=0
        }
        ret.unshift(num)
    }
    return ret.join('')
};
