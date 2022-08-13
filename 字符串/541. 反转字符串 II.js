/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    //先将字符串转换为数组，方便操作
    let arr = s.split('')
    //遍历数组，注意这里的递增条件是i+=2*k，这样我们就可以对每个2*k长度的区间操作了，省去了很多判断
    for(let i=0;i<arr.length;i+=2*k){
        //交换的起始区间为i
        let left=i
        //终止区间需要判断一下，如果i+k超过了数组长度，此时需要交换剩余所有字符，right=arr.length-1
        //如果不超过数组长度，就交换i+k-1之前的字符
        let right = i+k>arr.length ? arr.length-1 : i+k-1
        //利用双指针法交换数组项
        while(left<right){
            let tmp = arr[left]
            arr[left] = arr[right]
            arr[right]=tmp
            left++
            right--
        }
    }
    return arr.join('')
};
