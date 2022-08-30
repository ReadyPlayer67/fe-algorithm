/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    //贪心解法，我们对数组进行排序，排序规则如下：
    //对于数组中的数字a,b，如果Number(a+b)>Number(b+a)，我们认为a>b
    //以[10,2]为例,因为102<210，所以2大于10，因为是求最大，这题需要从大到小排序，所以排序后为[2,10]
    nums.sort((a,b) => {
        return `${b}${a}`-`${a}${b}`
    })
    //过滤掉开头的0，比如[0,0,0]我们需要去掉前两个0，数组变为[0]
    let i=0
    while(nums[i]===0 && i<nums.length-1){
        i++
    }
    //截取数组后拼接成字符串
    return nums.slice(i).join('')
};
