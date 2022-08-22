/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    //本题解法和131.分割回文串 类似，都是递归地进行切割，判断每个切割的子串是否复合要求
    //符合要求就push到path中
    let ret = []
    let path = []
    function backtrack(start){
        //因为ip地址最多有四位，所以当path.length>4时就终止
        if(path.length > 4){
            return
        }
        //当start>=s.length代表切割完了整个字符串，并且path的长度此时为4
        //代表找到了一个合理的ip地址，push到结果中并退出递归，继续寻找下一个解
        if(start >= s.length && path.length === 4){
            ret.push(path.join('.'))
            return
        }
        //从start开始，依次切割长度为1,2,3的字符串
        for(let i=start;i<s.length;i++){
            let str = s.substring(start,i+1)
            if(isValid(str)){
                //如果str是合法的，就push到path中
                path.push(str)
                //继续从i+1为开始切割后面的字符串
                backtrack(i+1)
                path.pop()
            }
        }
    }
    backtrack(0)
    return ret
};
//判断str是否是合法的ip地址的一位
function isValid(str){
    //首位不能为0
    if(str.startsWith('0') && str.length > 1){
        return false
    }
    return Number(str) >= 0 && Number(str) <= 255
}
