/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    //用一个栈存储后退的页面，一个栈存储前进的页面
    this.currentPage = homepage
    this.backStack = []
    this.forwarStack = []
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    //后退栈中push当前页面，替换当前页面并清空前进页面栈
    this.backStack.push(this.currentPage)
    this.currentPage = url
    this.forwarStack = []
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    for(let i=1;i<=steps;i++){
        //如果后退栈中还有值，先将当前页push到前进栈中，再把当前页替换为后退栈的栈顶元素
        if(this.backStack.length > 0){
            this.forwarStack.push(this.currentPage)
            this.currentPage = this.backStack.pop()
        }
    }
    return this.currentPage
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    //和后退同理，反着来了一遍
    for(let i=1;i<=steps;i++){
        if(this.forwarStack.length > 0){
            this.backStack.push(this.currentPage)
            this.currentPage = this.forwarStack.pop()
        }
    }
    return this.currentPage
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
