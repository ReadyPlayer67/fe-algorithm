/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    //我们从第0行第0列开始逐行逐列进行枚举
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            //如果该位置是已经填好的数字，跳过，处理下一列数字，如果整列数字处理完就会开始下一行
            if(board[i][j]!=='.'){
                continue
            }
            //如果不是数字，从1到9开始往该位置填数字
            for(let k=1;k<=9;k++){
                k=k.toString()
                if(isValid(board,i,j,k)){
                    //如果该位置能填k，就先填上
                    board[i][j] = k
                    //如果找到一个可行的数独答案，就会接收到[2]行返回的true，立即结束，一层一层地网上返回true
                    if(solveSudoku(board)){//[1]
                        return true
                    }
                    board[i][j]='.'
                }
            }
            // debugger 可以用debugger观察代码执行顺序
            //如果1~9所有数字试过都不行，返回false，这样第[1]步就能进行回溯，前一个数字回退成.
            return false
        }
    }
    //每一行每一列都枚举完了，说明找到了数独答案，返回true，由[1]行接收
    return true//[2]
};
//验证数字k是否能填在board的row行，col列位置
function isValid(board,row,col,k){
    //如果第i行或第i列有数字和k相等，说明k非法
    for(let i=0;i<9;i++){
        if(board[row][i] === k || board[i][col] === k){
            return false
        }
    }
    //验证3x3方格中是否有数字和k相等
    let x = Math.floor(row/3)*3
    let y = Math.floor(col/3)*3
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(board[x+i][y+j] === k){
                return false
            }
        }
    }
    return true
}

solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])
