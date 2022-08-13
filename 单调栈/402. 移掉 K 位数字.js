/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    //若要保证剩下的数字小，要保证左边的数字尽可能小
    //所以我们可以贪心地得到一个结论：我们从左到右遍历num，当发现num[i-1]>num[i]
    //也就是出现了一个在左边较大的数字，此时丢弃num[i]肯定比丢弃num[i-1]导致剩下的数大
    //那么我们就应该将num[i-1]移除（前提是当前还能移除数字）
    //这样我们就可以得知，num中的数字应当是尽量从左到右单调不递减的，考虑用单调栈来解决
    let stack = []
    //将num分割成每一位数字组成的数组
    let arr = num.split('').map(x=>Number(x))
    //单调栈操作，我们保证栈顶到栈底单调不递增
    for(let i=0;i<arr.length;i++){
        //当stack中有元素，当前数字大于栈顶数字，且还能够删除数字，我们就将栈顶元素删除（弹出）
        while(stack.length && arr[i]<stack[stack.length-1] && k > 0){
            stack.pop()
            k--
        }
        //将当前数字push到数组中
        stack.push(arr[i])
    }
    //如果k>0，删除次数还没用完，就从栈顶弹出元素（栈顶的数字肯定是当前最大的）
    while(k>0){
        stack.pop()
        k--
    }
    //将数组拼接成字符串，这里要忽略前导0且不能用Number()，数字太大可能越界
    let ans = ''
    let isLeadZero = true
    for(let d of stack){
        if(isLeadZero && d === 0){
            continue
        }
        isLeadZero = false
        ans += d
    }
    return ans === "" ? "0" : ans
};
