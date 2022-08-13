/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    //纯贪心解法，超时了
    for(let i=1;i<=k;i++){
        let maxProfits = 0
        let maxIndex = -1
        for(let j=0;j<capital.length;j++){
            if(w >= capital[j] && profits[j] > maxProfits){
                maxProfits = profits[j]
                maxIndex = j
            }
        }
        profits.splice(maxIndex,1)
        capital.splice(maxIndex,1)
        w += maxProfits
    }
    return w
};
import {Heap} from "./Heap.js";
//贪心+堆解法，为什么会想到用堆？本题限制交易k次，其实就是求交易k次的最大利润，是一个top K问题，这类问题一般都可以考虑用堆来做
var findMaximizedCapital2 = function(k, w, profits, capital) {
    //首先将profits和capital合并为一个二维数组，并按照第0项也就是capital升序排列
    const arr = capital.map((c,i) => [c,profits[i]]).sort((a,b) => a[0]-b[0])
    //初始化一个最大堆
    let heap = new Heap((a,b)=>a>b)
    //初始化一个变量cur表示当前遍历到arr第几项
    let cur = 0
    //外层循环，交易次数
    for(let i=0;i<k;i++){
        //内层循环，第一个条件cur<arr.length代表arr还没有被遍历完
        //第二个条件arr[cur][0]<=w代表当前资金w能够启动项目arr[cur]
        while(cur<arr.length && arr[cur][0]<=w){
            //如果满足以上条件，就把该项目的利润push到堆中
            heap.push(arr[cur][1])
            //cur++，表示该项目已经遍历过了，因为arr是按照capital升序排列的，不需要重复遍历arr了
            cur++
        }
        //如果堆中有值，w+=堆中的最大值，做利润最大的项目
        if(heap.size > 0){
            w+= heap.pop()
        }else{
            //否则跳出循环，代表剩下的交易无法完成
            break
        }
    }
    return w
};
