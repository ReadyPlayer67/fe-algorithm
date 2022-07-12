/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //利用api方法，去除头尾空格分割字符串，过滤是空格的元素后翻转再拼接
    // return s.trim().split(' ').filter(v => v).reverse().join(' ')
    //利用双端队列（双端队列（deque，或称 double-ended queue）是一种允许我们同时从前端和后端添加和移除元素的特殊队列。）
    let queue = []
    let word = ''
    let left = 0
    let right = s.length-1
    //先利用双指针去除头尾的空格
    while(s.charAt(left) === ' '){
        left++
    }
    while(s.charAt(right) === ' '){
        right--
    }
    //接下来从左到右遍历字符串
    while(left<=right){
        const c = s.charAt(left)
        //如果当前字符是空格且word不为空，说明是第一次遇到空格
        //这时候在双端队列头部插入word，并清空word
        if(c === ' ' && word){
            queue.unshift(word)
            word = ''
        }else if(c !== ' '){
            //如果当前字符不为空，说明单词还没遍历完，往单词中追加字符
            word += c
        }
        left++
    }
    //最末尾的单词要记得插入到队列中
    queue.unshift(word)
    //返回拼接的字符串
    return queue.join(' ')
};
