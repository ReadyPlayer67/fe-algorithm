/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //构造一个二维数组，填表格
    let dp = []
    for(let i=0;i<m;i++){
        dp[i] = []
        for(let j=0;j<n;j++){
            //第1行和第1列的值都是1，因为去第一行或第一列的格子方法都只有一种
            if(i===0 || j===0){
                dp[i][j] = 1
            }else{
                //由于我们每一步只能从向下或者向右移动一步，因此要想走到 (i, j)，
                //如果向下走一步，那么会从 (i-1, j)走过来；如果向右走一步，那么会从 (i, j-1)走过来
                //由此我们得到递推公式：
                dp[i][j] = dp[i-1][j]+dp[i][j-1]
            }
        }
    }
    return dp[m-1][n-1]
};
