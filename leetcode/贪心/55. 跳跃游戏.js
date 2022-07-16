/**
 * 贪心实现跳跃游戏
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
    //初始化一个变量cover，代表当前能跳跃到的最远距离
    let cover = 0
    //我们不关心怎么跳，遍历当前能跳到的范围数组项，并且不断更新cover
    for(let i=0;i<=cover;i++){
        //更新后的cover等于当前cover和在当前节点能够跳跃到的最远距离，两者的最大值
        cover = Math.max(cover,nums[i]+i)
        //只要cover >= nums.length-1，就代表能够跳跃到最后一个下标
        if(cover >= nums.length-1){
            return true
        }
    }
    //遍历完整个cover，并且cover还没有覆盖到最后一个数组项，就返回false
    return false
};
