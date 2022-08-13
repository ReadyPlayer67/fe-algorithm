/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    //本题和39.组合总和类似，实际上就是求满足和为n的组合
    let ret = []
    function backtrack(path,sum,start){
        if(path.length === k){
            if(sum === n){
                ret.push([...path])
            }
            return
        }
        //剪枝
        if(sum > n){
            return
        }
        for(let i=start;i<=9;i++){
            path.push(i)
            backtrack(path,sum+i,i+1)
            path.pop()
        }
    }
    backtrack([],0,1)
    return ret
};
