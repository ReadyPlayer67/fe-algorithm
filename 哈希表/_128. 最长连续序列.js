/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    //用哈希表来做，首先将数组转换为set
    let set = new Set(nums)
    //全局的最长连续序列长度
    let maxLength = 0
    //遍历set，对每一项num不断地寻找set中是否有num+1，然后更新全局最长连续序列长度即可
    //但是这样做时间复杂度会达到O(n2)，我们可以利用哈希表的特性来优化
    for(let num of set){
        //如果我们发现set中存在num-1，我们完全可以跳过处理num的过程
        //因为num-1的搜索过程必然会经过num，且num-1为起点的最长连续序列长度也必然大于以num为起点
        //也就是说从num开始的搜索结果不会大于以num-1开始，我们可以直接跳过
        if(set.has(num-1)){
            continue
        }
        //确认了没有num-1，我们就可以搜索以num为起点的最长连续序列了
        let length = 1
        let tmp = num
        while(set.has(tmp+1)){
            length++
            tmp++
        }
        maxLength = Math.max(maxLength,length)
    }
    return maxLength
};
