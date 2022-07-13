/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    //这题和46.全排列不同的就是可能会有重复的元素，不能用path.includes(num)这样进行去除已经添加过的数字
    //所以这题的关键在于标记已经添加过的数字以及值相同的数字，在排列的时候过滤掉这些数字
    let ret = []
    //对nums进行升序排序，这样值相同的数字就相邻，我们就能利用nums[i]===nums[i-1]过滤掉相同的数字
    nums.sort()
    //下面都是回溯公式
    function backtrack(path){
        if(path.length === nums.length){
            ret.push([...path])
            return
        }
        for(let i=0;i<nums.length;i++){
            const num = nums[i]
            //这一步很关键，num===null代表该数字已经被添加到了path中
            //(i>0 && nums[i] === nums[i-1] && nums[i-1] !== null)代表该数字和上一个处理过的数字重复
            //这两种情况都直接跳过
            if(num === null || (i>0 && nums[i] === nums[i-1] && nums[i-1] !== null)){
                continue
            }
            path.push(num)
            //添加完一个数字把他标记为null，下一次循环跳过该数字
            nums[i] = null
            backtrack(path)
            path.pop()
            //回溯时记得把数字重置回来
            nums[i] = num
        }
    }
    backtrack([])
    return ret
};

console.log(permuteUnique([3,0,3,3]))
