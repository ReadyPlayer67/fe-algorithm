/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  //深度优先搜索，遍历每个格子，从该格子出发向4个方向进行dfs，将探索过的土地总数累加起来就是岛屿的面积
  const m = grid.length
  const n = grid[0].length
  let ret = 0
  function dfs(i,j){
    if(i<0 || j<0 || i>=m || j>=n || grid[i][j] === 0){
      return 0
    }
    //将探索过的格子置为0，防止重复探索
    grid[i][j] = 0
    //如果当前格子是陆地，就记面积为1
    let area = 1
    //然后向4个方向搜索，将面积累加起来，最后返回出去
    area += dfs(i+1,j,area)
    area += dfs(i-1,j,area)
    area += dfs(i,j+1,area)
    area += dfs(i,j-1,area)
    return area
  }
  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      ret = Math.max(ret,dfs(i,j))
    }
  }
  return ret
};
