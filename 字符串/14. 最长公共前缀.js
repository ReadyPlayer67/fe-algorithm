/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  //横向扫描，首先初始化前缀ans为第一个字符串
  let ans = strs[0]
  //遍历strs，比较每一项和ans，俩俩找出公共前缀，最终结果就是所有字符串的公共前缀
  for(let i=1;i<strs.length;i++){
    let j=0
    for(;j<ans.length && j<strs[i].length;j++){
      if(ans[j] !== strs[i][j]){
        break
      }
    }
    ans = ans.substring(0,j)
    //如果ans为空，不用再遍历了，直接返回
    if(ans === ''){
      return ''
    }
  }
  return ans
};
