/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  //记忆化搜索
  let ret = 0
  const m = matrix.length
  const n = matrix[0].length
  //初始化一个dp数组做缓存，dp[i][j]表示起点为第i行第j列的单元格的最长递增路径长度
  let dp = new Array(m).fill(0).map(x=>new Array(n).fill(0))
  //遍历每个单元格作为起点，求出每个单元格的最长递增路径，同时更新全局最大值
  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      ret = Math.max(ret,backtrack(i,j))
    }
  }
  //递归求每个单元格的最长递增路径长度的方法
  function backtrack(i,j){
    //如果dp[i][j]不为0，代表有缓存，读缓存返回
    if(dp[i][j] !== 0){
      return dp[i][j]
    }
    //经过节点本身，长度要+1
    dp[i][j]++
    //尝试向四个方向走，如果不越界且下一个单元格比当前单元格的值大
    //就可以更新dp[i][j]的大小，为当前dp[i][j]和下一个单元格的最大路径+1之间的最大值
    if(i+1 < m && matrix[i+1][j]>matrix[i][j]){
      dp[i][j] = Math.max(dp[i][j],backtrack(i+1,j)+1)
    }
    if(i-1 >= 0 && matrix[i-1][j]>matrix[i][j]){
      dp[i][j] = Math.max(dp[i][j],backtrack(i-1,j)+1)
    }
    if(j+1 < n && matrix[i][j+1]>matrix[i][j]){
      dp[i][j] = Math.max(dp[i][j],backtrack(i,j+1)+1)
    }
    if(j-1 >= 0 &&matrix[i][j-1]>matrix[i][j]){
      dp[i][j] = Math.max(dp[i][j],backtrack(i,j-1)+1)
    }
    return dp[i][j]
  }
  //最终返回全局最大值
  return ret
};
