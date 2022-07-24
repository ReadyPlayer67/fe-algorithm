/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //用哈希表解决，如果长度不一样，直接retun false
    if(s.length !== t.length){
        return false
    }
    //初始化一个对象用来记录每个字母出现的次数
    let obj = {}
    for(let i = 0;i<s.length;i++){
        //如果s出现某个字母就+1，t出现就-1，最后看这个对象的每个value是否都是0
        const charS = s[i]
        const charT = t[i]
        if(obj[charS]){
            obj[charS]++
        }else{
            obj[charS] = 1
        }
        if(obj[charT]){
            obj[charT]--
        }else{
            obj[charT] = -1
        }
    }
    return Object.values(obj).every(item => item === 0)
};
