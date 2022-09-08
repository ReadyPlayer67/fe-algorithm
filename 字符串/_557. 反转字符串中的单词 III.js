/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //我的解法，把字符串按空格切割成单词数组，对每个单词执行反转方法
    return s.split(' ').map(item => swap(item)).join(' ')
};
//双指针反转字符串
function swap(word){
    let left = 0
    let right = word.length-1
    let arr = word.split('')
    while(left <= right){
        let tmp = arr[left]
        arr[left] = arr[right]
        arr[right] = tmp
        left++
        right--
    }
    return arr.join('')
}
