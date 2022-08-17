/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    //这题一看到会想到用回溯找出1~n的全排列，然后输出第k个全排列，但其实没必要这样做（事实上这样写会超时）
    //因为我们可以通过阶乘算出一个分支上的排列个数，如果k大于这个分支的排列个数，可以直接跳过该分支（剪枝）
    //比方说n=4,k=9，以1开头的排列个数等于3!=6个，k>6说明我们要找的排列一定不会以1开头
    //我们用9-6=3,3<6说明我们要找的排列以2开头，把2填上，继续递归地对下一位执行这种搜索方法就能得到最终的排列
    //首先我们用一个数组存放1~n的阶乘
    let factorial = [1]
    //计算阶乘
    for(let i=1;i<=n;i++){
        factorial[i] = factorial[i-1]*i
    }
    //用一个数组标记数字是否使用过
    let used = new Array(n+1).fill(false)
    //递归方法，index表示到这一步已经确定好了几位数字，他恰好也等于当前要填的数字下标
    function dfs(index,path){
        //如果index===n，代表排列已经确认，直接return
        if(index === n){
            return
        }
        //计算还未确定的数字的全排列个数，第1次进入时就是n-1
        const cnt = factorial[n-1-index]
        //遍历数字
        for(let i=1;i<=n;i++){
            //如果数字在之前已经使用过，直接跳过，找下一个数字
            if(used[i]){
                continue
            }
            //如果k大于当前阶乘，说明当前排列不会以i开头，跳过找下一个数字
            if(cnt < k){
                k -= cnt
                continue
            }
            //如果k<=当前阶乘，说明排列以i开头，填上i，并将他标记为已使用
            path.push(i)
            used[i]=true
            //继续递归地确认下一位数字
            dfs(index+1,path)
            return
        }
    }
    let path = []
    dfs(0,path)
    return path.join('')
};

