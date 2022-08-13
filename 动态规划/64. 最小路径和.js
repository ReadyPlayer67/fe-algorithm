/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    //简单动态规划题
    let m = grid.length,n = grid[0].length
    let dp = new Array(m).fill(0).map(x=>new Array(n).fill(0))
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            //起点位置的花费等于该点的花费
            if(i===0 && j===0){
                dp[i][j]=grid[0][0]
            }else if(i === 0){
                //第一行的花费等于当前点的花费加上他左边的总花费
                dp[i][j] = dp[i][j-1] + grid[0][j]
            }else if(j === 0){
                //第一列的花费等于当前点的花费加上他上边的总花费
                dp[i][j] = dp[i-1][j] + grid[i][0]
            }else{
                //否则就等于从上面下来的花费和从左边过来的花费，两者的最小值
                dp[i][j] = Math.min(dp[i-1][j]+grid[i][j],dp[i][j-1]+grid[i][j])
            }
        }
    }
    return dp[m-1][n-1]
};
