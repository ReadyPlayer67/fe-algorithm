/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    //这题和求子集类似，但是需要额外的判断条件
    let ret = []
    function backtrack(path,start){
        //在每一层递归时需要判断，值相同的数字不能反复用
        //比如[4,6,7,7]在递归到[4,6]，此时剩下元素还有[7,7]，7我们只能使用一次，不然就会出现两个[4,6,7]的重复解
        //为此我们在每一层递归时初始化一个set，将使用过的数字存放到set中
        let useSet = new Set()
        //只要长度大于2就可以当做一个递增子序列，push到ret中
        if(path.length>1){
            ret.push([...path])
        }
        //用start避免处理以往的元素
        for(let i=start;i<nums.length;i++){
            //如果path长度大于0且下一个数字小于path最后一个元素，跳过
            //如果useSet中含有这个数字，跳过
            if((path.length > 0 && nums[i] < path[path.length-1]) || useSet.has(nums[i])){
                continue
            }
            //记录这个数字在本层用过了，本层后面不能再使用了
            useSet.add(nums[i])
            path.push(nums[i])
            backtrack(path,i+1)
            path.pop()
        }
    }
    backtrack([],0)
    return ret
};
