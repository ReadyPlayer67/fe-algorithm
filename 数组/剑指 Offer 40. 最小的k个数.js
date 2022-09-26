/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    //可以排序后截取数组，也可以维护一个size为k的大顶堆
    arr.sort((a,b)=>a-b)
    return arr.slice(0,k)
};
