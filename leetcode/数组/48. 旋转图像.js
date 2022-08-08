/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    //我的解法，直接模拟旋转，这题和59.螺旋矩阵II类似，先旋转最外层，往内一层一层旋转
    const n = matrix.length
    //定义本次旋转的圈范围下标，开始时是从最外层开始旋转，所以start=0,end=n-1
    let start = 0
    let end = n-1
    while(start <= end){
        //开始原地旋转，每次旋转的时候留这一行/这一列最后一个元素不动
        //因为这个元素是交点，不能重复旋转，所以循环终止条件为i<end而不是i<=end
        for(let i=start;i<end;i++){
            //将最右边一列的元素先缓存下来
            let tmp1 = matrix[i][end]
            //将最上面一行的元素旋转到最右边一列
            matrix[i][end] = matrix[start][i]
            //将最下面一行的元素缓存起来
            let tmp2 = matrix[end][n-1-i]
            //将最右边一列的元素旋转到最下面一行
            matrix[end][n-1-i] = tmp1
            //将最左边一列的元素缓存起来
            let tmp3 = matrix[n-1-i][start]
            //将最下面一行的元素旋转到最左边一列
            matrix[n-1-i][start] = tmp2
            //将最左边一列的元素旋转到最上面一行
            matrix[start][i] = tmp3
        }
        //进入内层，继续旋转
        start++
        end--
    }
};
rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])
