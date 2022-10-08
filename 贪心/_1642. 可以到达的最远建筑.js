import {Heap} from "../堆/Heap.js";

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
  //贪心+堆，开始爬楼，如果遇到小于等于当前楼顶，直接跳过
  //如果下一个楼顶大于当前楼顶，先用砖头爬，因为后面可能会遇到更高的楼，梯子留着后面用
  //如果砖头用完了，此时该直接用梯子吗，答案是否定的，我们应当从之前爬过的大楼中，找到用砖头最多的那一次
  //那一次爬楼我们改用梯子，然后把那一次爬楼消耗的砖头取回来继续爬
  //当砖头不够了，梯子也没有了，就返回当前所在楼的下标，如果砖头梯子一直够爬完所有楼，返回heights的长度-1
  //因为我们要快速获取之前爬楼消耗最多砖头那一次，所以我们需要用一个最大堆
  let heap = new Heap()
  for(let i=1;i<heights.length;i++){
    const diff = heights[i] - heights[i-1]
    if(diff > 0){
      //先用砖头爬楼，并将每次消耗的砖头数push到堆中
      heap.push(diff)
      bricks -= diff
      if(bricks < 0){
        //如果砖头用完了且还有梯子，就利用堆找到之前消耗最多砖头那一次，进行交换
        if(ladders > 0){
          let max = heap.pop()
          ladders--
          bricks += max
        }else{
          return i - 1
        }
      }
    }
  }
  return heights.length-1
};

