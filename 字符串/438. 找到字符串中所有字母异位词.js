/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    //滑动窗口解法，首先判断边界情况
    if(s.length < p.length){
        return []
    }
    let ret = []
    //定义两个数组，分别表示p和s字母的mapping关系，下标表示字母，value表示出现次数
    let map = new Array(26).fill(0)
    let sMap = new Array(26).fill(0)
    //异或词的长度和p一定是相当的，所以我们可以一起初始化map和sMap
    for(let i=0;i<p.length;i++){
        map[p[i].charCodeAt()-'a'.charCodeAt()]++
        sMap[s[i].charCodeAt()-'a'.charCodeAt()]++
    }
    //一开始如果就是异或词，直接push下标0到ret中
    if(isValid(sMap,map)){
        ret.push(0)
    }
    //开始移动窗口，移动一次去除左边界的字母，添加右边界的字母，同时验证是否是异或词
    for(let i=0;i<s.length-p.length;i++){
        sMap[s[i].charCodeAt()-'a'.charCodeAt()]--
        sMap[s[i+p.length].charCodeAt()-'a'.charCodeAt()]++
        if(isValid(sMap,map)){
            ret.push(i+1)
        }
    }
    return ret
};
//判断是否是异或词的方法：两个map转换为字符串之后完全一致
function isValid(sMap,map){
    return map.toString() === sMap.toString()
}
