/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //用哈希表解决
    let obj = {}
    nums.forEach(num => {
        if(obj[num]){
            obj[num]++
        }else{
            obj[num]=1
        }
    })
    return Object.keys(obj).sort((a,b) => obj[b]-obj[a]).slice(0,k)
};
import {Heap} from "./Heap.js";

var topKFrequent2 = function(nums, k) {
    //用堆解决，先创建每个数字出现频率的对象
    let obj = {}
    nums.forEach(num => {
        if(obj[num]){
            obj[num]++
        }else{
            obj[num]=1
        }
    })
    //创建一个size为k最小堆，堆顶的元素是obj[key]值最小的那个key
    let heap = new Heap((a,b)=>obj[a]<obj[b])
    //遍历obj
    Object.keys(obj).forEach((key,index) => {
        //如果index<k，说明此时堆size还没满，直接push
        if(index < k){
            heap.push(key)
        }else if(obj[heap.peek()] < obj[key]){
            //如果堆顶元素的出现评率小于当前key的出现频率，说明当前key应该出现在堆里
            //push当前key，弹出堆顶元素
            heap.push(key)
            heap.pop()
        }
    })
    //最后返回heap.arr，同时去除首位0
    return heap.arr.slice(1)
};
