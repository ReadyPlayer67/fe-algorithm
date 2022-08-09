/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //这道题求的是子串，可以用滑动窗口来做
    //定义一个set用来判断是否是重复字符
    let set = new Set()
    //全局最大长度
    let max = 0
    //滑动窗口的右边界
    let right = 0
    //从第0位开始遍历，i就是滑动窗口的左边界
    for(let i=0;i<s.length;i++){
        //每次左边界右移一位，从map中删除左边界的字符
        if(i>0){
            set.delete(s[i-1])
        }
        //当右边界未越界并且set中不含有边界的字符
        while(right<s.length && !set.has(s[right])){
            //将有边界的字符add到set中，并且右移一位右边界
            set.add(s[right])
            right++
        }
        //当前right-i就是滑动窗口的长度，也就是当前以第i位开头的无重复最长子串
        //更新全局长度
        max = Math.max(max,right-i)
    }
    return max
};
