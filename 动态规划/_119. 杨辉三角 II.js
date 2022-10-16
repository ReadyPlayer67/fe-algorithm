/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    //依然是动态规划解法，时间复杂度O(n2)，数学解法可以做到O(n)
    let dp = [[1]]
    if(rowIndex <= 0){
        return dp
    }
    for(let i=1;i<=rowIndex;i++){
        let arr = []
        let lastArr = dp[i-1]
        for(let j=0;j<=i;j++){
            if(j === 0 || j === i){
                arr[j] = 1
            }else{
                arr[j] = lastArr[j-1]+lastArr[j]
            }
        }
        dp.push(arr)
    }
    return dp[rowIndex]
};
