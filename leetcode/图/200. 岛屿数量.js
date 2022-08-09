/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    //可以把地图看作有个无环图，竖直或水平相邻的1之间有边相连，
    //对于图可以使用DFS或BFS，本题我采用的是DFS
    const width = grid.length
    const length = grid[0].length
    //岛屿数量
    let count = 0
    //遍历每一个点
    for(let i=0;i<width;i++){
        for(let j=0;j<length;j++){
            //如果当前点等于1，代表是陆地，发现了一个岛屿,count++
            if(grid[i][j] === '1'){
                count++
                //并对该点进行深度优先搜索，在深度优先搜索的过程中，每个搜索到的1都会被重新标记为0
                dfs(i,j)
            }
        }
    }
    function dfs(i,j){
        //如果超出地图范围或者当前点不是陆地，直接返回
        if(i<0 || j<0 || i>=width || j>= length || grid[i][j]==='0'){
            return
        }
        //否则就将该陆地标记为0，并递归搜索他的上下左右四面
        grid[i][j] = '0'
        dfs(i+1,j)
        dfs(i-1,j)
        dfs(i,j+1)
        dfs(i,j-1)
    }
    return count
};
