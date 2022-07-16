/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    //类似49.组合总和和47.全排列II的组合版，多了一个过滤重复元素的过程
    let ret = []
    let path = []
    candidates.sort()
    function backtrack(start,sum){
        if(sum === target){
            ret.push([...path])
            return
        }else if(sum > target){
            return
        }
        for(let i=start;i<candidates.length;i++){
            let val = candidates[i]
            if(candidates[i] === null || (i>0 && candidates[i-1]!==null && candidates[i]===candidates[i-1])){
                continue
            }
            path.push(val)
            candidates[i]=null
            backtrack(i+1,sum+val)
            path.pop()
            candidates[i]=val
        }
    }
    backtrack(0,0)
    return ret
};
console.log(combinationSum2([14,6,25,9,30,20,33,34,28,30,16,12,31,9,9,12,34,16,25,32,8,7,30,12,33,20,21,29,24,17,27,34,11,17,30,6,32,21,27,17,16,8,24,12,12,28,11,33,10,32,22,13,34,18,12],27))
