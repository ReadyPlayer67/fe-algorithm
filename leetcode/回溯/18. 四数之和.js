/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    //从数组中取出一个元素，再从剩下的n-1个元素中挑选出和等于target-nums[i]的元素
    //可以看成一个N叉树的遍历问题，这样的解法适用于N数之和（要注意剪枝，不然会超时）
    let ret = []
    //对数组进行排序，便于剪枝和去重
    nums.sort((a,b)=>a-b)
    let tmp = []
    //开始深度遍历N叉树
    function dfs(index,sum){
        //找到一个合适解
        if(tmp.length === 4 && sum === target){
            ret.push([...tmp])
            return
        }
        //剪枝1：如果nums剩下的长度小于4-tmp.length，也就是nums剩下的所有元素都凑不满4，直接return
        if(nums.length - index < 4 - tmp.length){
            return
        }
        //剪枝2：我们可以验证如果target-sum也就是剩余的target如果小于nums[index]也就是当前数组最小值乘以tmp剩余的位置，
        //说明剩下的nums[i]无论怎么凑肯定会大于target（因为数组此时是升序排列的）
        if((target-sum)<nums[index]*(4-tmp.length)){
            return
        }
        //剪枝3:和剪枝2类似，如果剩余target大于nums最后一项乘以剩余位置，肯定也没法凑满target
        if((target-sum)>nums[nums.length-1]*(4-tmp.length)){
            return
        }
        //回溯过程
        for(let i=index;i<nums.length;i++){
            //去除重复项
            if(i>index && nums[i] === nums[i-1]){
                continue
            }
            tmp.push(nums[i])
            dfs(i+1,sum+nums[i])
            tmp.pop()
        }
    }
    dfs(0,0)
    return ret
};
