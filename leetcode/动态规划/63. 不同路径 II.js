/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    //62.不同路径的升级版，加入了障碍物
    let dp = []
    let row = obstacleGrid.length
    let col = obstacleGrid[0].length
    for(let i=0;i<row;i++){
        dp[i] = []
        for(let j=0;j<col;j++){
            //初始化第一行和第一列时，当遇到障碍物后，这一行/这一列之后的每一个格子都是0
            //因为路被挡住了，无法到达这些格子
            if(i===0){
                if(obstacleGrid[i][j]){
                    dp[i][j] = 0
                }else{
                    //这里我让后面的格子等于前面格子的值，如果有一个是0，后面的就都是0了
                    dp[i][j] = dp[i][j-1] !== undefined ? dp[i][j-1] : 1
                }
                continue
            }
            if(j===0){
                if(obstacleGrid[i][j]){
                    dp[i][j] = 0
                }else{
                    dp[i][j] = dp[i-1][j] !== undefined ? dp[i-1][j] : 1
                }
                continue
            }
            //当前位置是障碍物时，dp[i][j]就为0，表示，否则就是递推公式
            if(obstacleGrid[i][j]){
                dp[i][j] = 0
            }else{
                dp[i][j] = dp[i-1][j]+dp[i][j-1]
            }
        }
    }
    return dp[row-1][col-1]
};
