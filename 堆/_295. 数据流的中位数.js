import {Heap} from "./Heap.js";
//初始化两个堆（优先队列）
var MedianFinder = function() {
    //最大堆存放比中位数小的数，最小堆存放比中位数大的数
    //如果总数是偶数，最大堆和最小堆中的数就一样多，如果总数是奇数，就约定最大堆比最小堆size大1
    this.maxHeap = new Heap((a,b)=>a>b)
    this.minHeap = new Heap((a,b)=>a<b)
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    //如果当前最大堆size为0，即没有数据，或者num比最大堆的peek，也就是最大堆中的最大值小，就push到最大堆中
    if(!this.maxHeap.size || num < this.maxHeap.peek()){
        this.maxHeap.push(num)
    }else{
        //否则push到最小堆中
        this.minHeap.push(num)
    }
    //然后我们要保证两个堆平衡，最大堆size-最小堆size不能超过1，否则就把最大堆中的最大值push到最小堆中
    if(this.maxHeap.size-this.minHeap.size>1){
        this.minHeap.push(this.maxHeap.pop())
    }else if(this.minHeap.size-this.maxHeap.size>0){
        //同理
        this.maxHeap.push(this.minHeap.pop())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    //如果长度为奇数，就返回最大堆的peek
    if((this.maxHeap.size+this.minHeap.size)%2){
        return this.maxHeap.peek()
    }else{
        //如果长度为偶数，就返回最大堆的peek加上最小堆的peek除以2
        return (this.maxHeap.peek()+this.minHeap.peek())/2
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
