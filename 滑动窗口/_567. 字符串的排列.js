/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    //滑动窗口，我们用两个26位长的数组分别维护当前s1,s2每个字母出现的次数
    //然后我们我们可以遍历s2中的每个长度为n的子串，判断子串和s1中每个字符的个数是否相等
    //若相等则说明该子串是s1的一个排列，遍历方法为维护一个长度为n的滑动窗口
    const n = s1.length, m = s2.length;
    if (n > m) {
        return false;
    }
    //初始化两个数组cnt1,cnt2
    const cnt1 = new Array(26).fill(0)
    const cnt2 = new Array(26).fill(0)
    for(let i=0;i<s1.length;i++){
        cnt1[s1[i].charCodeAt()-'a'.charCodeAt()]++
        cnt2[s2[i].charCodeAt()-'a'.charCodeAt()]++
    }
    //用数组的toString()方法判断两个数组是否相等，即每个字母出现的次数是否相等
    if(cnt1.toString() === cnt2.toString()){
        return true
    }
    //向后滑动窗口，每次新增s2[i]，移除s2[i-n]
    for(let i=n;i<m;i++){
        cnt2[s2[i].charCodeAt()-'a'.charCodeAt()]++
        cnt2[s2[i-n].charCodeAt()-'a'.charCodeAt()]--
        if(cnt1.toString() === cnt2.toString()){
            return true
        }
    }
    return false
};
