/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    //我的贪心解法
    let ret = []
    //外层循环的条件是s的长度大于0（因为在下边会切割s）
    while(s.length){
        //定义一个变量表示本次切割的下标
        let lastIndex = 0
        //从第一个字母开始遍历
        for(let i=0;i<=lastIndex;i++){
            let char = s[i]
            //找到该字母在s中最后出现的位置下标，和当前lastIndex比较取最大值，不断更新lastIndex
            lastIndex = Math.max(lastIndex,s.lastIndexOf(char))
        }
        //遍历完成说明最后检查完lastIndex前的所有字符，他们最后出现的位置都小于等于lastIndex
        //此时就可以确定lastIndex就是本次切割的下标，更新ret并切割s，切掉lastIndex前面的字符，继续做下一次切割
        ret.push(lastIndex+1)
        s = s.substring(lastIndex+1)
    }
    return ret
};
