/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    //贪心解法，和621.任务调度器有些类似，先将出现次数最多的字符铺开，再填充他们中间的空隙
    let map = {}
    //出现最多的字母出现的次数
    let maxCharCount = 0
    //统计各个字母出现的次数，并算出出现最多的字母出现的次数
    for(let char of s){
        if(map[char]){
            map[char]++
            maxCharCount = Math.max(maxCharCount,map[char])
        }else{
            map[char]=1
        }
    }
    //如果一个字母出现的次数超过了1/2整个字符串长度，代表没法重构，返回''
    if(s.length - maxCharCount + 1 < maxCharCount){
        return ''
    }
    //如果可以重构，首先将所有字母按照出现次数降序排列
    //这里使用Object.entries，这样得到的数组第一项为字母，第二项为他的出现次数
    let words = Object.entries(map).sort((a,b)=>b[1]-a[1])
    //初始化一个数组用来重构字符串
    let retArr = new Array(s.length).fill('')
    //当前填充到的数组下标
    let index = 0
    //遍历每个字母
    for(let i=0;i<words.length;i++){
        //从出现次数最多的字母开始填充，优先将他放在偶数下标：0,2,4...，因为偶数下标出现的次数必然大于等于奇数下标
        //如果当前字母还剩下，就循环将他一隔一个填充到retArr中
        while(words[i][1] > 0){
            retArr[index] = words[i][0]
            //保证中间有空隙
            index+=2
            words[i][1]--
            //如果到达了尾部，就开始填充奇数下标位置
            if(index >= s.length){
                index = 1
            }
        }
    }
    return retArr.join('')
};
