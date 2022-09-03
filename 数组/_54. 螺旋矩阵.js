/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    //这题和59类似，但是59是正方形而这题是矩形，长宽可能不等，稍复杂
    //遍历矩形方法还是类似，左闭右开的方式
    //定义m为矩形宽度，n为长度
    let m = matrix.length
    let n = matrix[0].length
    let ret = []
    //遍历开始位置start
    let start = 0
    //因为长宽可能不等，所以要定义两个遍历终止变量
    let endM = m-1
    let endN = n-1
    //定义一个loop表示应当遍历的圈数，用m,n的最小值除以2取整
    let loop = Math.floor(Math.min(m,n)/2)
    //当还需要遍历至少一圈时
    while(loop>0){
        //利用左闭右开的方式遍历遍历每一条边
        for(let i=start;i<endN;i++){
            ret.push(matrix[start][i])
        }
        for(let i=start;i<endM;i++){
            ret.push(matrix[i][endN])
        }
        for(let i=endN;i>start;i--){
            ret.push(matrix[endM][i])
        }
        for(let i=endM;i>start;i--){
            ret.push(matrix[i][start])
        }
        loop--
        start++
        endM--
        endN--
    }
    //如果m，n的最小值是0奇数，遍历到最后会留下来一个特殊的中间行或者中间列，具体是中间行还是中间列要对m，n进行比较
    if(Math.min(m,n)%2){
        //如果m>n，剩下的是中间列
        if(m<n){
            for(let i=start;i<=endN;i++){
                ret.push(matrix[start][i])
            }
        }else{//如果m<n，剩下的是中间行
            for(let i=start;i<=endM;i++){
                ret.push(matrix[i][start])
            }
        }
    }
    return ret
};

console.log(spiralOrder([[1,2,3,4,5,6,7,8,9,10]]))
