/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
// [
//     ["A","B","C","E"],
//     ["S","F","C","S"],
//     ["A","D","E","E"]
// ]
const exist = function(board, word) {
    if(board.length === 0) return false
    if(word.length === 0) return true
    let row = board.length
    let col = board[0].length
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            const ret = find(i,j,0)
            if(ret){
                return true
            }
        }
    }
    return false

    function find(i,j,cur){
        if(i >= row || i<0){
            return false
        }
        if(j >= col || j<0){
            return false
        }
        const letter = board[i][j]
        if(letter !== word[cur]){
            return false
        }
        if(cur === word.length - 1){
            return true
        }
        //把board[i][j]标记为null，意思是从这个位置过来的
        //这样下一步往四个方向继续查找的时候就不会原路返回了（直接进入letter !== word[cur]这个条件）
        board[i][j] = null
        const ret = find(i+1,j,cur+1) ||
                    find(i-1,j,cur+1) ||
                    find(i,j+1,cur+1) ||
                    find(i,j-1,cur+1)
        board[i][j] = letter
        return ret

    }
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"SEE"))
