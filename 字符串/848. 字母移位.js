/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    let sum = 0
    let arr = s.split('')
    //倒序遍历
    for(let i=shifts.length-1;i>=0;i--){
        //sum为每一位需要位移的距离
        sum += shifts[i] % 26
        //假设'a'的位置为0，index为当前位字母位移后的下标
        let index = arr[i].charCodeAt()- 'a'.charCodeAt() + sum
        //index有可能大于26，对26取余后转换为字母，即当前位字母位移后的结果
        arr[i] = String.fromCharCode(index%26+'a'.charCodeAt())
    }
    return arr.join('')
};
