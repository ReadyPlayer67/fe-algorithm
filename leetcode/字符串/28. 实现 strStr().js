/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //暴力解法，外层循环是haystack第0位开始遍历
    for(let i=0;i<haystack.length;i++){
        let hIndex = i
        let nIndex = 0
        //内层循环从needle第0位开始，当和haystack第i位匹配上时就继续循环，检查后面的字符是否相同
        while(haystack[hIndex] === needle[nIndex]){
            //当needle被遍历完，说明字符串被匹配完了，返回hIndex一开始的值
            if(nIndex === needle.length-1){
                return hIndex - needle.length + 1
            }
            hIndex++
            nIndex++
        }
    }
    return -1
};
