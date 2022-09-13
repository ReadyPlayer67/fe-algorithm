/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    //我的解法，深度优先搜索，类似岛屿问题，先遍历矩阵，从每个0开始向四个方向走，把经过的点都设置为null
    //再次遍历矩阵，遇到null的点就重置为0
    const m = matrix.length,n = matrix[0].length
    function dfs(i,j,direction){
        if(i<0 || j<0 || i>=m || j >= n || matrix[i][j] === 0){
            return
        }
        matrix[i][j] = null
        if(direction === 'up'){
            dfs(i-1,j,'up')
        }else if(direction === 'down'){
            dfs(i+1,j,'down')
        }else if(direction === 'left'){
            dfs(i,j-1,'left')
        }else{
            dfs(i,j+1,'right')
        }
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j] === 0){
                dfs(i-1,j,'up')
                dfs(i+1,j,'down')
                dfs(i,j-1,'left')
                dfs(i,j+1,'right')
            }
        }
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j] === null){
                matrix[i][j] = 0
            }
        }
    }
};

//官方解法，标记法，维护两个数组row,col，分别表示row[i]行和col[j]列是否需要填充为0
//先遍历一遍矩阵，如果遇到matrix===0，就将row[i]和col[j]设置为true
//再次遍历矩阵，如果row[i]或col[j]为true，代表该点需要填充为0
var setZeroes2 = function(matrix) {
    const m = matrix.length,n = matrix[0].length
    let row = new Array(m).fill(false)
    let col = new Array(n).fill(false)
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j] === 0){
                row[i] = true
                col[j] = true
            }
        }
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(row[i]|| col[j]){
                matrix[i][j] = 0
            }
        }
    }
};
