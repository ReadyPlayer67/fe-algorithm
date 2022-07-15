/**
 * 回溯求一个集合的所有子集
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    //于77.组合很类似，只不过组合需要判断path的长度等于nums，而子集不需要
    let ret = []
    function backtrack(path,start){
        // if(path.length === nums.length){
        //     ret.push([...path])
        //     return
        // }
        // if(path.length < nums.length){
        //     ret.push([...path])
        // }
        //不再需要判断path.length，每个path路径都push到ret中
        //这里不需要结束条件return，终止条件就是start===nums.length，这时候循环不执行，直接就退出backtrack方法了
        ret.push([...path])
        for(let i=start;i<nums.length;i++){
            if(!path.includes(nums[i])){
                path.push(nums[i])
                //有start作为约束条件，不会找重复的数字
                backtrack(path,i+1)
                path.pop()
            }
        }
    }
    backtrack([],0)
    return ret
};

console.log(subsets([1,2,3]))
