/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
  //本题和200.岛屿数量II有类似的地方，都是用DFS先遍历出一个完整的岛屿
  //但是本题要求我们求不同形状岛屿的数量，因此我们需要用一个set记录已经遍历完的岛屿形状
  //那么问题就是我们如何序列化一个岛屿，我们发现对于形状相同的岛屿，如果从同一起点出发，dfs 函数遍历的顺序肯定是一样的
  //比如一个2*2的正方形从左上角开始遍历顺序就是先往下再往右再往上，然后撤销上，撤销右，撤销下
  //我们用1,2,3,4代表上下左右，-1,-2,-3,-4 代表上下左右的撤销,那么这个正方形就可以序列化为2,4,1,-1,-4,-2
  //我们只需要修改backtrack函数，添加一个参数记录遍历顺序即可
  let set = new Set()
  const m = grid.length
  const n = grid[0].length
  //遍历每一个格子
  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      if(grid[i][j] === 1){
        let path = []
        backtrack(i,j,path,-1)
        //遍历完一个岛屿后，将path转换为字符串尝试添加到set中，如果有重复的岛屿形状就不会添加成功
        set.add(path.join(''))
      }
    }
  }
  //dir参数表示上一次遍历过来的方向
  function backtrack(i,j,path,dir){
    if(i<0||j<0||i>=m||j>=n||grid[i][j] === 0){
      return
    }
    grid[i][j] = 0
    //我们将这个方向记录到path数组里
    path.push(dir)
    //然后再往四个方向搜索
    backtrack(i-1,j,path,1)
    backtrack(i+1,j,path,2)
    backtrack(i,j-1,path,3)
    backtrack(i,j+1,path,4)
    //搜索完记得要加上回退方向
    path.push(-dir)
  }
  //最后返回set的大小
  return set.size
};
