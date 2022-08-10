/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    //回溯做法
    let ret = []
    //backtrack方法，参数是当前字符串，openCount表示还剩多少(可用,closeCount表示还剩多少)可用
    function backtrack(str,openCount,closeCount){
        //如果没有(和)可用，代表找到了一个解，将当前str push到ret中
        if(openCount === 0 && closeCount === 0){
            ret.push(str)
            return
        }
        //如果还要(和)可用，有三种情况
        //1.openCount === closeCount，此时只能添加(，添加一个(进一步递归
        if(openCount === closeCount){
            backtrack(str+'(',openCount-1,closeCount)
        }else if(openCount < closeCount){
            //2.openCount < closeCount，此时既可以添加(又可以添加)
            //如果还有(可用，添加一个(继续递归
            if(openCount > 0){
                backtrack(str+'(',openCount-1,closeCount)
            }
            //添加一个)继续递归
            backtrack(str+')',openCount,closeCount-1)
        }
        //3.由于我们在openCount === closeCount时不会添加)，所以不可能出现openCount > closeCount的情况
    }
    //初始递归，字符串为空，有n个()可用
    backtrack('',n,n)
    return ret
};
