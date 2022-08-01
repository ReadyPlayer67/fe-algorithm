/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    //将两个s拼接在一起得到str，假设s是由s1+s2组成，两个s就是s1+s2+s1+s2，此时我们去掉str的头尾两个字符
    //得到s3+s2+s1+s4，如果s是由子串循环组成，也就是s1=s2，所以s2+s1=s
    //如果s不是循环字串,s1!=s2，s2+s1!=s
    //所以我们此时只需要判断str中是否包含s即可判断s是否是一个循环字串
    let str = s + s
    str = str.substring(1,str.length-1)
    return str.indexOf(s) > -1
};
