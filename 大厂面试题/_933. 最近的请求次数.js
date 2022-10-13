//用一个队列存放请求，每次ping的时候弹出头部3000毫秒之前的请求，最后返回队列的长度
var RecentCounter = function() {
    this.queue = []
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t)
    while(this.queue.length && this.queue[0] < t - 3000){
        this.queue.shift()
    }
    return this.queue.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
