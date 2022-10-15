/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    //动态规划求杨辉三角
    let dp = [[1]]
    if(numRows <= 1){
        return dp
    }
    for(let i=2;i<=numRows;i++){
        let arr = []
        let lastArr = dp[i-2]
        for(let j=0;j<i;j++){
            //每一行第一个和最后一个都是1
            if(j === 0 || j === i-1){
                arr[j] = 1
            }else{
                //其他的数等于上一行的前一个下标的数+当前下标的数的和
                arr[j] = lastArr[j-1]+lastArr[j]
            }
        }
        dp.push(arr)
    }
    return dp
};
