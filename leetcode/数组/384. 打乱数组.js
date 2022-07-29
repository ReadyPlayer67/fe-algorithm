/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    //这题其实就是洗牌算法
    let copy = [...this.nums]
    let len = copy.length
    //从后往前遍历数组，因为这样计算随机下标方便一些
    for(let i=len-1;i>=0;i--){
        //用Math.random()方法在0~i区间求一个随机下标
        let random = Math.floor(Math.random()*(i+1));
        //将copy[i]和copy[random]交换
        [copy[i],copy[random]] = [copy[random],copy[i]]
    }
    return copy
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
