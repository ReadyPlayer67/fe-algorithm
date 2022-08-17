/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    //根据题意，与边界的O相连的O都不会被填充为X，其他所有点都填充为X
    //所以我们可以先从边界上的O点作为起点，标记所有与他相连的点为'A'
    //之后我们再遍历整个图形，将A修改为O，剩下的O都修改为X
    let n = board.length
    let m = board[0].length
    //遍历上下两条边界上的点
    for(let i=0;i<m;i++){
        dfs(i,0)
        dfs(i,n-1)
    }
    //遍历左右两条边界上的点
    for(let i=1;i<n-1;i++){
        dfs(0,i)
        dfs(m-1,i)
    }
    //最后遍历整张图，将A修改为O，O修改为X
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(board[i][j] === 'A'){
                board[i][j] = 'O'
            }else if(board[i][j] === 'O'){
                board[i][j] = 'X'
            }
        }
    }
    //递归方法，往上下左右四个方向进行搜索，如果是O就标记为A
    function dfs(x,y){
        //越界或当前点不为O就退出
        if(x<0 || x>=m || y<0 ||y>=n || board[y][x] !== 'O'){
            return
        }
        board[y][x] = 'A'
        //往上下左右四个方向搜索
        dfs(x+1,y)
        dfs(x-1,y)
        dfs(x,y+1)
        dfs(x,y-1)
    }
};

