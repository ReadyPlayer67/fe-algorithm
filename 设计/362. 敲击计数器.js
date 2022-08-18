var HitCounter = function() {
    //用一个队列存放敲击timestamp
    this.queue = []
};

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    //时间戳入队列
    this.queue.push(timestamp)
};

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    //删除队列中超时的敲击timestamp，返回剩下的元素个数
    while(timestamp-this.queue[0]>=300){
        this.queue.shift()
    }
    return this.queue.length
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
