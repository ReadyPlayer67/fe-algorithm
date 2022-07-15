/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //将字符串中的非数字和字母过滤掉，并全部转换成小写
    let str = s.replace(/[^a-z0-9]/gi,'').toLowerCase()
    //之后没什么好说的，利用双指针
    let left=0
    let right=str.length-1
    while(left<=right){
        if(str[left]!==str[right]){
            return false
        }
        left++
        right--
    }
    return true
};
