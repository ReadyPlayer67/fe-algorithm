/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    //z字型搜索，核心思路就是从右上角的点开始检查
    //如果matrix[x][y]>target,说明matrix[x][y]所在列的元素都比target大，可以直接去除这行，x-1
    //如果matrix[x][y]《target,说明matrix[x][y]所在行的元素都比target小，可以直接去除这行，y+1
    //我用的递归写法
    let ret = false
    let width = matrix.length
    let length = matrix[0].length
    function dfs(x,y){
        if(ret || x<0 || y>=width){
            return
        }
        if(matrix[y][x] > target){
            dfs(x-1,y)
        }else if(matrix[y][x] < target){
            dfs(x,y+1)
        }else if(matrix[y][x] === target){
            ret = true
            return
        }
    }
    dfs(length-1,0)
    return ret
};

//迭代写法，效率更高，因为可以提前退出循环
var searchMatrix2 = function(matrix, target) {
    let m = matrix.length
    let n = matrix[0].length
    let x = 0,y = n-1
    while(x <= m-1 && y >=0){
        if(matrix[x][y] === target){
            return true
        }else if(matrix[x][y] > target){
            y--
        }else{
            x++
        }
    }
    return false
};
