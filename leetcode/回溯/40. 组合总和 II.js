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
        }else if(sum > target){//这里要注意剪枝，不然可能复杂的求解会超时
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

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum21 = function(candidates, target) {
    //set去重法
    let ret = []
    //!!!!重要，用set法去重（树层去重）一定要先对数组进行排序，比如[1,2,1],target=3，一开始useSet={1}，递归找到一个解[1,2]
    //如果没排序pop完以后就会从2开始试，此时本层的useSet={1}，不过continue，这样就会出现重复解[2,1]，起不到去重效果了
    //而如果排序了以后[1,1,2]，在找到第一个解[1,2]后第二次又从1开始尝试，此时会被useSet={1}跳过
    //而第三次尝试2时，数组里已经没有数字了，就不会出现重复解
    candidates.sort()
    function backtrack(path,start,sum){
        //用一个set来对本层元素进行去重
        let useSet = new Set()
        if(sum === target){
            ret.push([...path])
            return
        }
        if(sum > target){
            return
        }
        debugger
        for(let i=start;i<candidates.length;i++){
            if(useSet.has(candidates[i])){
                continue
            }
            path.push(candidates[i])
            useSet.add(candidates[i])
            backtrack(path,i+1,sum+candidates[i])
            path.pop()
        }
    }
    backtrack([],0,0)
    return ret
};

console.log(combinationSum21([2,5,2,1,2],5))
