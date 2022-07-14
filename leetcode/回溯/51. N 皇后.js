/**
 * 回溯解决N皇后问题
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    //结果需要返回一个类似矩阵的数据结构，我们可以先构造一个数组[1,3,0,2]，数组索引代表行数，数组val代表列数
    //我们检查数组项的关系就能判断该位置的皇后能否互相攻击
    //首先因为皇后能攻击直线，所以所有皇后不能在同一行和同一列，我们现在已经保证皇后都在每一行了
    //保证不在每一列其实就是保证每个数组项的val不相等
    //同时因为皇后能攻击每条斜线，我们可以得出Math.abs(c-col)===Math.abs(r-row)这个公式
    //若满足A皇后的行数-B皇后的行数的绝对值等于A皇后的列数-B皇后的列数的绝对值，说明他们能互相攻击
    let ret = []
    //按照回溯公式写一个backtrack方法，参数row代表当前行数，path代表构造的数组
    function backtrack(row,path){
        //终止条件path的长度等于n，代表找到了一个答案
        if(path.length === n){
            //将[1,3,0,2]转换成答案需要的矩阵形式
            ret.push(
                path.map(item => {
                    let arr = new Array(n).fill('.')
                    arr[item] = 'Q'
                    return arr.join('')
                })
            )
        }
        //当前行row已经确定，我们开始遍历每一列，逐个判断是否能放置皇后
        for(let col=0;col<n;col++){
            //判断当前列是否能放置皇后的变量，因为只要path中存在任意棋子会和当前行列放置的皇后互相攻击，就能不能放皇后
            //所以我们这里用some方法，只要有棋子满足就返回true，代表不能摆放
            let canNotSet = path.some((c,r) => {
                return c===col || (Math.abs(c-col)===Math.abs(r-row))
            })
            //如果不能放置棋子，continue继续遍历下一列
            if(canNotSet){
                continue
            }
            //如果可以放置棋子，就往path中push棋子所放置的列数
            path.push(col)
            //继续递归，此时row+1代表要去下一行进行放置
            backtrack(row+1,path)
            //回溯，弹出最顶部元素
            path.pop()
        }
    }
    //从第1行开始逐行放置棋子
    backtrack(0,[])
    return ret
};

solveNQueens(4)
