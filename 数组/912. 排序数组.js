/**
 * @param {number[]} nums
 * @return {number[]}
 */
import {Heap} from "../堆/Heap.js";

var sortArray = function(nums) {
    //归并排序
    if(nums.length > 1){
        const mid = nums.length >> 1
        const left = sortArray(nums.slice(0,mid))
        const right = sortArray(nums.slice(mid))
        nums = merge(left,right)
    }
    return nums
};

function merge(arr1,arr2){
    let i = 0
    let j = 0
    let arr = []
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i])
            i++
        }else{
            arr.push(arr2[j])
            j++
        }
    }
    if(i < arr1.length){
        return arr.concat(arr1.slice(i))
    }else{
        return arr.concat(arr2.slice(j))
    }
}

// console.log(sortArray([1,3,2,4]))

//堆排序
function sortArray2(nums){
    //创建一个最大堆
    let heap = new Heap()
    //将数组中的元素都放到最大堆中，此时堆的顶部元素就是最大元素
    for(let num of nums){
        heap.push(num)
    }
    let ret = []
    //我们依次弹出堆顶元素放入数组尾部，最后得到的就是一个升序数组
    while(heap.size){
        ret.unshift(heap.pop())
    }
    return ret
}

console.log(sortArray2([1,3,2,4]))
