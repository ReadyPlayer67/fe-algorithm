/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    //输入的数字长度
    let len = digits.length
    //用一个数组表示每个数字对应的字母表
    let arr = [
        '','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'
    ]
    //边界情况
    if(len===0){
        return []
    }
    //存储结果的数组
    let ret = []
    //缓存一个字母映射结果的数组
    let path = []
    //因为每次从输入的数字第一位作为开始位置，往后枚举就可以了，所以backtrack方法只需调用一次
    //而不像79.单词搜索，需要循环遍历每一个字母作为开始位置
    backtrack(digits,len,0)
    return ret
    //回溯问题公式，创建一个backtrack方法
    //digits代表输入的数字，l代表字母映射结果的长度，因为输入几个数字就得到几个字母，所以就等于len
    //i代表当前搜索到digits的第几位
    function backtrack(digits,l,i){
        //递归终止条件：如果path的长度等于l，说明一个字母映射结果已被找到，直接push到ret中并return
        if(path.length === l){
            ret.push(path.join(''))
            return
        }
        //如果字母映射还没有被拼接完成，到当前位数的数字对应的字母表，遍历这个字母表，把字母拼接到path中
        //并继续递归执行backtrack，此时第三个参数i+1，往下一位搜索
        for(const v of arr[digits[i]]){
            path.push(v)
            backtrack(digits,l,i+1)
            //找到一个path后要弹出最后一位字母，继续回溯尝试下一个解
            path.pop(v)
        }
    }
};
