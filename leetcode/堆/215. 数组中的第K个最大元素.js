import {Heap} from "./Heap.js";
/**
 * 利用堆解决top K问题
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //初始化一个最小堆，堆的size固定为k
    let heap = new Heap((a,b)=>a<b)
    //遍历数组，将元素添加到堆中
    for(let num of nums){
        heap.push(num)
        //如果超过size，就弹出堆顶元素
        if(heap.size>k){
            heap.pop()
        }
    }
    //最后堆顶的元素就是数组第K大的元素
    return heap.peek()
};

console.log(findKthLargest([3,2,1,5,6,4],2))
