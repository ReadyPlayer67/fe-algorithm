/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    //我的解法，哈希表+滑动窗口
    //用一个map记录t每个字符出现的次数
    let tMap = {}
    for(let char of t){
        if(tMap[char]){
            tMap[char]++
        }else{
            tMap[char]=1
        }
    }
    //再用一个map记录s每个字符出现的次数
    let sMap = {}
    //最小窗口左边界和右边界，因为本题要求最小值，初始化时要让他们的差值大于s.length
    let minLeft = -1
    let minRight = s.length
    //滑动窗口右边界，默认为0
    let right = 0
    //i为滑动窗口左边界，默认也是从0开始
    for(let i=0;i<s.length;i++){
        //左窗口每次左移，sMap需要删除一个字符出现次数
        if(i>0){
            if(s[i-1] in sMap){
                sMap[s[i-1]]--
            }
        }
        //如果有窗口未到字符串末尾并且s没有覆盖t，这时候右窗口需要右移
        while(right < s.length && !check(tMap,sMap)){
            //sMap需要添加字符出现次数
            if(s[right] in sMap){
                sMap[s[right]]++
            }else{
                sMap[s[right]]=1
            }
            right++
        }
        //如果当前滑动窗口复合要求，判断窗口大小是否小于全局的最小滑动窗口大小，如果是就更新全局滑动窗口大小
        if(check(tMap,sMap)){
            if(right-i<minRight-minLeft){
                minRight = right
                minLeft = i
            }
        }
    }
    //如果滑动窗口从未满足过要求（s覆盖t），那么minLeft就等于初始值-1，返回''
    //否则就返回截取的字符串
    return minLeft === -1 ? '' :s.substring(minLeft,minRight)
};
//定义一个方法，检查t中所有字符字符得出现次数是否都小于s中字符出现次数
//也就是s是否涵盖t中所有的字符
function check(tMap,sMap){
    for(let key in tMap){
        if(!sMap[key] || sMap[key] < tMap[key]){
            return false
        }
    }
    return true
}
