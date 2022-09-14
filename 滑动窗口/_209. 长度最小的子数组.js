/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    //我的解法，利用快慢指针
    let ret = Infinity
    let slow = 0
    let fast = 0
    let sum = nums[0]
    //终止条件是slow和fast都到达终点
    while(fast<nums.length && slow<nums.length){
        //如果当前和大于target，比较返回ret，并且从sum中减去nums[slow]，右移慢指针，往后循环，继续比较sum和target
        if(sum>=target){
            const len= fast-slow+1
            ret = ret >= len ? len : ret
            sum-=nums[slow]
            slow++
        }else{//否则右移快指针，并且sum加上nums[fast]，往后循环，继续比较sum和target
            fast++
            sum+=nums[fast]
        }
    }
    //返回ret
    return ret===Infinity?0:ret
};

//滑动窗口解法，可以参考3.无重复字符得最长子串
var minSubArrayLen2 = function(target, nums) {
    let min = Infinity
    let right = 0
    let sum = 0
    for(let i=0;i<nums.length;i++){
        if(i > 0){
            sum -= nums[i-1]
        }
        while(right < nums.length && sum < target){
            sum += nums[right]
            right++
        }
        if(sum >= target){
            debugger
            min = Math.min(min,right-i)
        }
    }
    return min === Infinity ? 0 :min
};

console.log(minSubArrayLen2(7,[2,3,1,2,4,3]))
