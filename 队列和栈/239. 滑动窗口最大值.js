/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    //单调队列解法，所谓单调队列本身是一个双端队列，可以从头部和尾部弹出元素
    //并且他内部的元素都是单调递增或递减的，所以在队列末尾插入元素前，要先将队列中违反单调性质的元素弹出（删掉）
    //这道题首先我们初始化一个单调队列，由于我们也好求得是窗口中的最大值
    //我们维护一个从队列头部到尾部单调递减的队列，队列中存放的是nums的下标i，这样我们就能从队首获取最大值的下标
    let queue = []
    let ret = []
    //首先遍历前k项，获取初始窗口的单调队列
    for(let i=0;i<k;i++){
        //当队列内有元素，且当前元素比队尾元素大，就弹出队尾元素
        while(queue.length && nums[i] > nums[queue[queue.length-1]]){
            queue.pop()
        }
        //最后把元素push到队列中
        queue.push(i)
    }
    //将当前窗口的最大值，也就是单调队列的第一项push到ret中
    ret.push(nums[queue[0]])
    //从k开始往后遍历，完成所有窗口的情况
    for(let i=k;i<nums.length;i++){
        //当队首元素不在当前窗口内了，需要移除
        if(i-k >= queue[0]){
            queue.shift()
        }
        //和上面一样，弹出违反单调原则的元素，再将当前下标push到队列中
        while(queue.length && nums[i] > nums[queue[queue.length-1]]){
            queue.pop()
        }
        queue.push(i)
        //返回当前队列的第一项，即最大值
        ret.push(nums[queue[0]])
    }
    return ret
};
