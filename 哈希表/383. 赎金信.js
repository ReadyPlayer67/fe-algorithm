/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    //用哈希表解决，先遍历magazine，把每个字母出现的次数存储到obj中
    let obj = {}
    for(let s of magazine){
        if(!obj[s]){
            obj[s] = 1
        }else{
            obj[s]++
        }
    }
    //再遍历ransomNote,出现一次字母就让obj[s]--
    // 如果obj[s]不存在，说明这个字母不存在，或者obj[s]===0，代表字母用完了，返回false
    for(let s of ransomNote){
        if(!obj[s] || obj[s] === 0){
            return false
        }else{
            obj[s]--
        }
    }
    return true
};
