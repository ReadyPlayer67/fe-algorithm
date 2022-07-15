/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    //对于例子'aab'，我们这样进行回溯，从s第0位开始切割1个字符得到a,他是回文的
    //从切割结束的位置1开始继续往后切割1个字符得到a，也是回文的，继续从位置2开始切割1个字符得到b，这样就得到了一个解[a,a,b]
    //退出递归,pop一位b，因为遍历到了最后一位，也会退出递归，再pop一位a,这时候path里就剩下a
    //继续循环，刚刚是从位置1往后切割1个字符，这次是两个，得到ab，但是他并不是回文的并且b是字符串最后一位
    //所以这层递归又结束了，退出pop a，此时path就是空的了，下次切割就是从位置0开始切割两位得到aa了，就这样回溯搜索下去...
    let ret = []
    let path = []
    //这里的参数start指上一次切割的结束位置，这一次切割就得从该位置开始切割
    function backtrack(start){
        //递归终止条件，当上一次切割的结束位置等于字符串长度，说明整个字符串被检查完了
        //把当前路径push到ret中并退出递归，进行回溯检查下一个可能的解
        if(start >= s.length){
            ret.push([...path])
            return
        }
        //如果还未切割完字符串，从上一次切割结束的位置，由短到长地切割子串（i++即每次切割的长度+1）
        for(let i=start;i<s.length;i++){
            //判断s字符串在start和i位置中间的子串是否是回文的
            if(isPalindrome(s,start,i)){
                let str = s.substring(start,i+1)
                //如果子串str是回文的，就把他push到path中，记录下来
                path.push(str)
                //递归执行backtrack，传入的参数为i+1，代表之后的切割操作要从i+1位置往后
                //（因为i+1之前的字符串已经被切割好了且都是回文的）
                backtrack(i+1)
                path.pop()
            }
        }
        //如果遍历完start后面的所有字符都无法切割出回文的子串，这层递归就会在这里退出
        //返回上一次递归，执行path.pop()，弹出一位字符，重新进行切割操作尝试得到回文的子串
    }
    backtrack(0)
    return ret
};
//验证s字符串l和r位置中间的子串是否是回文的，可以参考125.验证回文串
function isPalindrome(s,l,r) {
    for(let i=l,j=r;i<j;i++,j--){
        if(s[i]!==s[j]){
            return false
        }
    }
    return true
}

console.log(partition('aab'))
