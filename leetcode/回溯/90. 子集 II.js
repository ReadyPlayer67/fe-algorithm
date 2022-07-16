/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    //这题其实就是78.子集和47.全排列II的组合版，数组中存在值相同的元素，我们在求子集时要跳过这些值相同的元素
    let ret = []
    let path = []
    //对nums排序，以便检查相同的元素
    nums.sort()
    function backtrack(start){
        ret.push([...path])
        for(let i=start;i<nums.length;i++){
            const num = nums[i]
            //当遇到已处理过的元素或者和上一次处理的元素值相同的元素，跳过
            if(num === null || i>0 && nums[i-1] !== null && nums[i] === nums[i-1]){
                continue
            }
            path.push(nums[i])
            //将处理过的元素标记为null，以便跳过
            nums[i]=null
            backtrack(i+1)
            path.pop()
            nums[i]=num
        }
    }
    backtrack(0)
    return ret
};
