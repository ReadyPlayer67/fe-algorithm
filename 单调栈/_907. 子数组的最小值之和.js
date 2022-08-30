/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    //这道题暴力枚举所有子数组会超时，我们考虑用单调栈来做
    //举例arr:[3,1,2,4,1]，下标为2的数字2辐射范围为[2,4]，也就是说[2,4]范围所产生的子数组最小值都是2
    //如何确定辐射范围呢，答案是找到左侧第一个比2小的元素和右侧第一个比2小的元素，介于这两个元素直接的范围就是2的辐射范围
    //之后我们确定辐射范围的子数组个数，再乘以2，就得到了2辐射范围的最小值之和
    //我们统计数数组所有元素的辐射范围，就能计算出全局的子数组最小值之和
    const MOD = 1000000007
    //定义两个数组存放每个元素辐射范围的左边界/右边界，即左侧/右侧第一个比他小的元素
    let left = []
    let right = []
    let len = arr.length
    let stack = []
    //单调栈公式
    for(let i=0;i<len;i++){
        while(stack.length && arr[stack[stack.length-1]]>arr[i]){
            stack.pop()
        }
        //这里注意如果stack为空，代表元素辐射范围的左边界达到了数组左边界，设定一个最左边界-1
        if(stack.length){
            left[i]=stack[stack.length-1]
        }else{
            left[i]=-1
        }
        stack.push(i)
    }
    //重置单调栈，继续求每个元素的辐射右边界
    stack = []
    for(let i=len-1;i>=0;i--){
        //在计算右边界时设置为求解大于等于arr[i]的元素，
        //目的是为了解决当一个子数组中有两个最小值元素时（比如[3,1,2,4,1]中有两个1），不重复且不遗漏地统计每一个子数组。
        while(stack.length && arr[stack[stack.length-1]]>=arr[i]){
            stack.pop()
        }
        //这里同理，如果达到了数组右边界，设定一个最右边界len
        if(stack.length){
            right[i]=stack[stack.length-1]
        }else{
            right[i]=len
        }
        stack.push(i)
    }
    let ret = 0
    //用元素乘以辐射范围产生的子数组个数，得到子数组最小值之和
    for(let i=0;i<len;i++){
        ret += arr[i] * (i-left[i])*(right[i]-i)
    }
    return ret % MOD
};
