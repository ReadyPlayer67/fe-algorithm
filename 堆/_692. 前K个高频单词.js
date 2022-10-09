/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  //首先用哈希表存储每个单词的出现次数
  let map = {}
  for(let word of words){
    if(map[word]){
      map[word]++
    }else{
      map[word]=1
    }
  }
  //之后可以对key按照出现次数进行排序，取数组前k项，也可以用最小堆进行堆排序
  const arr = Object.keys(map).sort((a,b) => {
    if(map[a] === map[b]){
      return a.localeCompare(b)
    }else{
      return map[b] - map[a]
    }
  })
  return arr.slice(0,k)
};
