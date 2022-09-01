/**
 * 利用回溯解决单词搜索问题
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
// 在一个矩阵验证一个单词是否存在
// [
//     ["A","B","C","E"],
//     ["S","F","C","S"],
//     ["A","D","E","E"]
// ]
const exist = function(board, word) {
    //边界情况
    if(board.length === 0) return false
    if(word.length === 0) return true
    //矩阵高度
    let row = board.length
    //矩阵宽度
    let col = board[0].length
    //因为起点不确定，所以我们要遍历矩阵的每一个点作为起点
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            //对每一个起点执行find方法
            const ret = find(i,j,0)
            //如果find方法返回true，说明找到了单词，返回true
            if(ret){
                return true
            }
        }
    }
    //遍历完所有节点都没能找到单词，返回false
    return false

    //i，j代表当前节点在矩阵中的行数和列数，cur代表当前查找的字母在单词word中的索引
    function find(i,j,cur){
        //边界条件，如果超出了矩阵范围，说明此路不通，返回false
        if(i >= row || i<0){
            return false
        }
        if(j >= col || j<0){
            return false
        }
        //初始化一个变量letter作为当前矩阵位置的字母
        const letter = board[i][j]
        //如果当前字母不是我们想要的，返回false
        if(letter !== word[cur]){
            return false
        }
        //如果当前字母是我们想要的，且整个单词都被找完了，说明单词被找到了，返回true
        if(cur === word.length - 1){
            return true
        }
        //把board[i][j]标记为null，意思是从这个位置过来的
        //这样下一步往四个方向继续查找的时候就不会原路返回了（直接进入letter !== word[cur]这个条件）
        board[i][j] = null
        //往四个方向查找下一个字母，cur+1dang
        const ret = find(i+1,j,cur+1) ||
                    find(i-1,j,cur+1) ||
                    find(i,j+1,cur+1) ||
                    find(i,j-1,cur+1)
        board[i][j] = letter
        return ret
    }
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"SEE"))
