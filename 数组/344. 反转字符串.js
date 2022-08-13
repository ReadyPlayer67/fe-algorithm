/**
 * 利用双指针反转字符串数组
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    //定义一个左指针和一个右指针，交换他们的位置
    //然后左指针右移，右指针左移，直到他们碰上
    let left=0
    let right=s.length-1
    while(left<=right){
        let tmp = s[left]
        s[left]=s[right]
        s[right]=tmp
        right--
        left++
    }
};
