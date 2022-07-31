/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    //模拟螺旋的过程，如果直接从每一行开头遍历到结尾，然后再从每一列开头到结尾
    //会出现大量边界情况，需要大量的判断，所以我们遍历统一采用左闭后开（上闭下开）的遍历方式，然后一圈一圈往里遍历
    //定义每一圈遍历的开始位置下标，初始值为0
    let start = 0
    //定义每一圈遍历的结束位置下标，初始值为n-1
    let end = n-1
    //初始化结果矩阵
    let ret = new Array(n).fill(0).map(x=>new Array(n).fill(0))
    //要填的数字，从1开始
    let num = 1
    //外层循环代表一圈2，当end<start，循环结束
    while(end >= start){
        //边界情况，当n为奇数时矩阵会有一个中心点，这个点特殊处理
        if(start === end){
            ret[start][start] = num
        }else{
            // 上行从左到右（左闭右开）
            for(let i=start;i<end;i++){
                ret[start][i] = num
                num++
            }
            // 右列从上到下（左闭右开）
            for(let i=start;i<end;i++){
                ret[i][end] = num
                num++
            }
            // 下行从右到左（左闭右开）
            for(let i=end;i>start;i--){
                ret[end][i] = num
                num++
            }
            // 左列从下到上（左闭右开）
            for(let i=end;i>start;i--){
                ret[i][start] = num
                num++
            }
        }
        //缩小start和end的范围，进入内层一圈
        start++
        end--
    }
    return ret
};
