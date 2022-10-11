/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    //用一个哈希表记录每个子字符串出现的次数，如果出现次数等于2，就push到ret中
    let map = new Map()
    let ret = []
    const len = s.length
    //遍历每个子字符串，统计出现次数
    for(let i=0;i<=len-10;i++){
        const str = s.substring(i,i+10)
        map.set(str,(map.get(str) || 0) + 1)
        //为了防止重复统计，仅当出现次数为2的时候push一次
        if(map.get(str) === 2){
            ret.push(str)
        }
    }
    return ret
};
